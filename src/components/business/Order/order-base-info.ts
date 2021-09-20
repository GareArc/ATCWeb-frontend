import { IItemBasicInfo } from "@/components/business/Item/Item-base-info";

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

    delFromThreePeople(targetItem: IItemBasicInfo): void {
        this.ThreePeople.splice(this.ThreePeople.findIndex(
            item => {return targetItem === item}),
            1);
    }
    delFromTarget1(targetItem: IItemBasicInfo): void {
        this.Target1.splice(this.Target1.findIndex(
            item => {return targetItem === item}),
            1);
    }
    delFromTarget2(targetItem: IItemBasicInfo): void {
        this.Target2.splice(this.Target2.findIndex(
            item => {return targetItem === item}),
            1);
    }

    addToThreePeople(item: IItemBasicInfo): void {
        this.ThreePeople.push(item);
    }
    addToTarget1(item: IItemBasicInfo): void {
        this.Target1.push(item);
    }
    addToTarget2(item: IItemBasicInfo): void {
        this.Target2.push(item);
    }
    setElectricityFee(fee: number): void {
        this.Fees.electricityFee = fee;
    }
    setAmazonFee(fee: number): void {
        this.Fees.amazonFee = fee;
    }
    setInternetFee(fee: number): void {
        this.Fees.internetFee = fee;
    }
    setOtherFee(fee: number): void {
        this.Fees.otherFee = fee;
    }
}
