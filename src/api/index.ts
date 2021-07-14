import {get, post} from "@/api/http";

export async function getAllOrderUUIDs(): Promise<any> {
    return get("/order/all");
}

export async function getOrderSummary(uuid: string): Promise<any> {
    return get("/summary/" + uuid);
}

export async function getQuote(): Promise<any> {
    return get("/quote");
}

export async function postOrder(json: any): Promise<any> {
    return post("/order", json);
}

export async function getLatestSummary(): Promise<any> {
    return get("/summary/latest");
}


