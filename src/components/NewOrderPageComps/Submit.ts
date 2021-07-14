import {Vue} from "vue-class-component";
import {Inject} from "vue-property-decorator";
import {OrderBaseInfo} from "@/components/business/Order/order-base-info";
import {postOrder} from "@/api";

export default class Submit extends Vue {
    @Inject()
    order!: OrderBaseInfo

    txt = "Something went wrong.";
    uuid = "";
    test = "NULL";

    async submitOrder(): Promise<void> {
        this.test = "...";
        await postOrder(JSON.parse(JSON.stringify(this.order)))
            .then(res => {
                this.uuid = res;
            })
            .catch(e => {console.log(e)});
        this.test = "Succeed";
    }
}
