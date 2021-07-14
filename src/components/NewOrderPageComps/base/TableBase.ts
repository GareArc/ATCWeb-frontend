import {Vue} from "vue-class-component";
import {Inject} from "vue-property-decorator";
import {OrderBaseInfo} from "@/components/business/Order/order-base-info";
import {IItemBasicInfo} from "@/components/business/Item/Item-base-info";
import {getRelationDesc} from "../../business/Utils/Converters";

export default abstract class TableBase extends Vue {
    @Inject()
    order!: OrderBaseInfo

    getRelationDesc(item: IItemBasicInfo): string {
        return getRelationDesc(item, this.order);
    }

    abstract deleteRow(item: IItemBasicInfo): void
}
