import {Vue} from "vue-class-component";
import {getAllOrderUUIDs, getOrderSummary} from "@/api";
import {ElLoading} from "element-plus";
import {ILoadingInstance} from "element-plus/es/el-loading/src/loading.type";
import {getOption} from "@/components/business/Utils/LoadingOptions";
import {downloadTxt} from "@/components/business/Utils/DownloadTriger";

interface ISummaryInfo {
    uuid: string,
    electricityFee: number | undefined,
    amazonFee: number | undefined,
    internetFee: number | undefined,
    otherFee: number | undefined,
    target1Info: string | undefined,
    target2Info: string | undefined,
    itemsForTarget1: string[] | undefined,
    itemsForTarget2: string[] | undefined,
    itemsForAll: string[] | undefined,
    totalTarget1: number | undefined,
    totalTarget2: number | undefined,
    txtString: string
}

export default class HistoryPage extends Vue {
    orderList:{uuid: string, dateTime: string}[] = [];
    selected = "";
    afterConfirm = false;
    loadingInstance!: ILoadingInstance;
    summaryInfo: ISummaryInfo = {
        amazonFee: 0,
        electricityFee: 0,
        internetFee: 0,
        itemsForAll: [],
        itemsForTarget1: [],
        itemsForTarget2: [],
        otherFee: 0,
        target1Info: "undefined",
        target2Info: "undefined",
        totalTarget1: 0,
        totalTarget2: 0,
        uuid: "",
        txtString: ""
    };

    async created(): Promise<void> {
        await this.updateOrderList().then(r => {
            if(this.orderList.length <= 0) return;
            this.selected = this.orderList[this.orderList.length - 1].uuid;
        });
    }

    async updateOrderList(): Promise<any> {
        this.startLoading();
        await getAllOrderUUIDs()
            .then(res => this.orderList = res.data)
            .catch(err => console.log(err));
        this.endLoading();
    }

    async RenderSummary():Promise<void> {
        this.startLoading();
        await getOrderSummary(this.selected)
            .then(res => {
                this.setSummaryInfo(res.data);
                this.afterConfirm = true;})
            .catch(err => err);
        this.endLoading();
    }

    startLoading(): void {
        this.loadingInstance = ElLoading.service(getOption());
    }

    endLoading(): void {
        this.loadingInstance.close();
    }

    setSummaryInfo(json: any):void {
        this.summaryInfo = {
            amazonFee: json.amazonFee,
            electricityFee: json.electricityFee,
            internetFee: json.internetFee,
            itemsForAll: json.itemsForAll,
            itemsForTarget1: json.itemsForTarget1,
            itemsForTarget2: json.itemsForTarget2,
            otherFee: json.otherFee,
            target1Info: json.target1Info,
            target2Info: json.target2Info,
            totalTarget1: json.totalTarget1,
            totalTarget2: json.totalTarget2,
            uuid: json.uuid,
            txtString: json.txtString
        }
    }
    isEmptyList(list: string[]): boolean {
        return list.length <= 0;
    }

    generateTxT(): void {
        downloadTxt(this.summaryInfo.txtString, this.summaryInfo.uuid);
    }
}
