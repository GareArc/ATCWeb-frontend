import {Vue} from "vue-class-component";
import {Inject} from "vue-property-decorator";
import {OrderBaseInfo} from "@/components/business/Order/order-base-info";
import {IItemBasicInfo, Relation, ShareType, Shop} from "@/components/business/Item/Item-base-info";

const relationMap = new Map([
    [1, Relation.INDIVIDUAL], [2, Relation.SHARED], [3, Relation.ALL]
]);

const shareTypeMap = new Map([
    [1, ShareType.TARGETS], [2, ShareType.WITHTARGET1], [3, ShareType.WITHTARGET2]
]);

const shopMap = new Map([
    [1, Shop.NORMAL], [2, Shop.JNC], [3, Shop.UBER]
]);

export default class CreateItemForm extends Vue {
    @Inject()
    order!: OrderBaseInfo;

    isSubmitting = false;

    selectedTarget = "";

    itemInfo: IItemBasicInfo = {
        price: 0.01,
        quantity: 1,
        relation: Relation.ALL,
        shareType: ShareType.TARGETS,
        isTaxed: false,
        shop: Shop.NORMAL
    };

    // computed
    get shareTypeTargets():string {
        return this.order.Target1Info + "和" + this.order.Target2Info;
    }
    get shareTypeTarget1(): string {
        return "我和" + this.order.Target1Info;
    }
    get shareTypeTarget2(): string {
        return "我和" + this.order.Target2Info;
    }
    get canShowShareType(): boolean {
        return this.itemInfo.relation === Relation.SHARED;
    }
    get canShowTargetOption(): boolean {
        return this.itemInfo.relation === Relation.INDIVIDUAL;
    }

    // methods

    created(): void {
        this.selectedTarget = this.order.Target1Info;
    }

    // radio related
    OnRelationChange(indicator: number): void {
        const relation = relationMap.get(indicator);
        this.itemInfo.relation = (relation === undefined)? Relation.ALL : relation;
    }

    OnShareTypeChange(indicator: number): void {
        const shareType = shareTypeMap.get(indicator);
        this.itemInfo.shareType = (shareType === undefined)? ShareType.TARGETS : shareType;
    }

    OnShopChange(indicator: number): void {
        const shop = shopMap.get(indicator);
        this.itemInfo.shop = (shop === undefined)? Shop.NORMAL : shop;
    }

    // submit related
    submit(): void {
        if(this.isSubmitting) return;
        this.isSubmitting = true;
        this.addInOrder(Object.assign({}, this.itemInfo));
        this.isSubmitting = false;
    }
    addInOrder(item: IItemBasicInfo): void {
        if(item.relation === Relation.ALL) this.order.addToThreePeople(item);
        else if(item.relation === Relation.INDIVIDUAL) {
            if(this.selectedTarget === this.order.Target1Info) this.order.addToTarget1(item);
            else this.order.addToTarget2(item);
        }
        else {
            if(item.shareType === ShareType.TARGETS) {
                this.order.addToTarget1(item);
                this.order.addToTarget2(item);
            }
            else if(item.shareType === ShareType.WITHTARGET1) this.order.addToTarget1(item);
            else this.order.addToTarget2(item);
        }
    }
}
