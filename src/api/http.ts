import axios from "axios";
import config from "@/api/config";

const instance = axios.create({
    baseURL: config.baseUrl.default,
    timeout: 10000
});

// get
export async function get(url: string, params: any = {}): Promise<any> {
    return new Promise((resolve, reject) => {
        instance
            .get(url, {params: params})
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err)
            })
    });
}

// post
export async function post(url: string, data: any = {}): Promise<any> {
    return new Promise((resolve, reject) => {
        instance
            .post(url, data)
            .then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                reject(err);
            });
    });
}
