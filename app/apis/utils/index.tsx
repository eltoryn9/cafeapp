import axios from "axios";
import * as Config from '../../configs/auth-config.json';

export const socialAPI = axios.create({
    baseURL: Config.api_server_url,
    timeout: 1000
});


// export const 