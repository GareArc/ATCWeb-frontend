export interface IItemBasicInfo {
    price: number;
    quantity: number;
    isTaxed: boolean;
    relation: Relation;
    shareType: ShareType | undefined;
    shop: Shop;
}

export enum Relation {
    INDIVIDUAL = "INDIVIDUAL",
    SHARED = "SHARED",
    ALL = "ALL"
}

export enum ShareType {
    WITHTARGET1 = "WITHTARGET1",
    WITHTARGET2 = "WITHTARGET2",
    TARGETS = "TARGETS",
    // NOTSHARED = "NOTSHARED"
}

export enum Shop {
    JNC = "JNC",
    UBER = "UBER",
    NORMAL = "NORMAL"
}
