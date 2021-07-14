import { IItemBasicInfo } from "@/components/busniss/Item/Item-base-info";

export class OrderBaseInfo{
    ThreePeople: IItemBasicInfo[];
    Target1: IItemBasicInfo[];
    Target2: IItemBasicInfo[];
    Target1Info: string;
    Target2Info: string;
    Fees: {
        electricityFee: number;
        amazonFee: number;
        internetFee: number;
        otherFee: number;
    }

    constructor(ThreePeople: IItemBasicInfo[] = [],
                Target1: IItemBasicInfo[] = [],
                Target2: IItemBasicInfo[] = [],
                Target1Info = "Gareth",
                Target2Info = "Charlie",
                Fees: { electricityFee: number; amazonFee: number; internetFee: number; otherFee: number } = {electricityFee: 0, amazonFee: 0, internetFee: 0, otherFee: 0}) {
        this.ThreePeople = ThreePeople;
        this.Target1 = Target1;
        this.Target2 = Target2;
        this.Target1Info = Target1Info;
        this.Target2Info = Target2Info;
        this.Fees = Fees;
    }

    toJSONStr(): string {
        return JSON.stringify(this, ["ThreePeople", "Target1", "Target2", "Target1Info", "Target2Info", "Fees"]);
    }
}
