import TableBase from "@/components/NewOrderPageComps/base/TableBase";
import {IItemBasicInfo} from "@/components/business/Item/Item-base-info";

export default class TableTarget1 extends TableBase {
    deleteRow(item: IItemBasicInfo): void {
        this.order.delFromTarget1(item);
    }

}
