export interface IItemBasicInfo {
    price: number;
    quantity: number;
    isTaxed: number;
    relation: Relation;
    shop: Shop;
}

export enum Relation {
    INDIVIDUAL = "INDIVIDUAL",
    SHARED = "SHARED",
    ALL = "ALL"
}

export enum Shop {
    JNC = "JNC",
    UBER = "UBER",
    NORMAL = "NORMAL"
}
