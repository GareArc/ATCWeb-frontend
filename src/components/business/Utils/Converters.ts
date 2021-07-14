import {IItemBasicInfo, Relation, ShareType} from "@/components/business/Item/Item-base-info";
import {OrderBaseInfo} from "@/components/business/Order/order-base-info";

export function getRelationDesc(item: IItemBasicInfo,
                         order: OrderBaseInfo): string {
    if(item.relation === Relation.SHARED){
        switch (item.shareType) {
            case ShareType.WITHTARGET1:
                return "我和" + order.Target1Info;
            case ShareType.WITHTARGET2:
                return "我和" + order.Target2Info;
            default:
                return order.Target1Info + "和" + order.Target2Info;
        }
    }
    switch (item.relation) {
        case Relation.INDIVIDUAL:
            return "个人";
        default:
            return "三人";
    }
}
