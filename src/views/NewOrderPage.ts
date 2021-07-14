import { Vue, Options } from "vue-class-component";
import TableThreePeople from "@/components/NewOrderPageComps/TableThreePeople.vue";
import TableTarget1 from "@/components/NewOrderPageComps/TableTarget1.vue";
import { OrderBaseInfo } from "@/components/business/Order/order-base-info";
import { Provide } from "vue-property-decorator";
import TableTarget2 from "@/components/NewOrderPageComps/TableTarget2.vue";
import CreateItemForm from "@/components/NewOrderPageComps/CreateItemForm.vue";
import {IItemBasicInfo, Relation, ShareType, Shop} from "@/components/business/Item/Item-base-info";
import BasicInfo from "@/components/NewOrderPageComps/BasicInfo.vue";
import Submit from "@/components/NewOrderPageComps/Submit.vue";

@Options({
    components: {
        TableThreePeople,
        TableTarget1,
        TableTarget2,
        CreateItemForm,
        BasicInfo,
        Submit
    }
})
export default class NewOrderPage extends Vue {
    Order: OrderBaseInfo = new OrderBaseInfo();
    Info = "";

    @Provide()
    order = this.Order;

    get getTabThreePeople(): string {
        return "三人物品" + "(" + this.order.ThreePeople.length + ")";
    }

    get getTabTarget1(): string {
        return this.order.Target1Info + "(" + this.order.Target1.length + ")";
    }

    get getTabTarget2(): string {
        return this.order.Target2Info + "(" + this.order.Target2.length + ")";
    }

    clearOrder(): void {
        this.Order = new OrderBaseInfo();
    }

    // Test only
    addDefault(): void {
        const item: IItemBasicInfo = {
            price: Math.ceil(Math.random() * 10),
            quantity: Math.ceil(Math.random() * 10),
            isTaxed: false,
            relation: Relation.SHARED,
            shareType: ShareType.WITHTARGET1,
            shop: Shop.NORMAL
        };
        this.order.addToTarget1(item);
    }
}
