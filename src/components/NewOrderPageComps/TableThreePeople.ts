import {IItemBasicInfo} from "@/components/business/Item/Item-base-info";
import TableBase from "@/components/NewOrderPageComps/base/TableBase";

export default class TableThreePeople extends TableBase {
    deleteRow(item: IItemBasicInfo): void {
        this.order.delFromThreePeople(item);
    }
}
