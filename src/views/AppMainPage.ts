import { Vue } from "vue-class-component";
import { OrderBaseInfo } from "@/components/busniss/Order/order-base-info";

export default class AppMainPage extends Vue {
    Order: OrderBaseInfo = new OrderBaseInfo();
    Info = "";

    clearOrder(): void {
        this.Order = new OrderBaseInfo();
    }

    generateJSONStr():void {
        this.Info = this.Order.toJSONStr();
    }
}
