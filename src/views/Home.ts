import { Vue } from "vue-class-component";
import {getAllOrderUUIDs, getOrderSummary, getQuote} from "@/api";
import DotLine from "@/components/HomeComps/DotLine";
import {Watch} from "vue-property-decorator";

let dotLineLoader: DotLine | null = null;

export default class Home extends Vue {
    temp = "";
    btnLoading = false;
    quote = "";
    quoteInProcess = false;

    @Watch("$route")
    routeLeave(to: any, from: any): void {
        if(dotLineLoader === null) return;
        dotLineLoader.stop().then(r => r);
    }

    mounted():void {
        this.LoadCanvas().then(r => r);
        // console.log(dotLineLoader);
    }

    created(): void {
        this.LoadQuote().then(r => {return r});
    }

    async LoadCanvas(): Promise<void> {
        const config = {
            dom: "canvas",//画布id
            cw: (<HTMLElement>document.getElementById("main")).offsetWidth,//画布宽
            ch: (<HTMLElement>document.getElementById("main")).offsetHeight,//画布高
            ds: 100,//点的个数
            r: 3,//圆点半径
            cl: '#ffffff',//粒子线颜色
            dis: 100//触发连线的距离
        }
        dotLineLoader = new DotLine(config);
        await dotLineLoader.start();
    }

    goToNewOrderPage(): void {
        this.$router.push("NewOrderPage")
            .then()
            .catch(err => {
                console.log(err);
            });
    }

    goToHistoryPage(): void {
        this.$router.push("HistoryPage")
            .then()
            .catch(err => console.log(err))
    }

    async LoadQuote(): Promise<void> {
        if(this.quoteInProcess) return;
        this.quoteInProcess = true;
        this.quote = "...";
        await getQuote()
            .then(res => {
                this.quote = res.data;
            })
            .catch(e => {
                console.log(e)
            });
        this.quoteInProcess = false;
    }

    async getTotalTarget1(): Promise<void> {
        let uuid = "";
        this.temp = "";
        this.btnLoading = true;
        await getAllOrderUUIDs()
            .then(res => {
                uuid = res.data[0];
            })
            .catch(err => {
                console.log(err);
            });
        await getOrderSummary(uuid)
            .then(res => {
                this.temp = res.data.totalTarget1;
            })
            .catch(err => {
                console.log(err);
            });
        this.btnLoading = false;
    }


}
