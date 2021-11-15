import axios, { AxiosPromise, AxiosRequestHeaders, Method } from "axios";
import * as Config from '../../configs/auth-config.json';
import { useAuth } from "../../context/auth/AuthContext";

export const socialAPI = axios.create({
    baseURL: Config.api_server_url,
    timeout: 1000
});

export const api = async (resourceUrl: string, method: Method, data: Object, header: AxiosRequestHeaders): Promise<AxiosPromise> => {
    const result = await axios({
        url: resourceUrl,
        method: method,
        data: data,
        headers: header
    });
    return new Promise((resolve) => {
        resolve(result);
    })
}