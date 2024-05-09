import axios from "@/core/httpClient";
import { message } from "ant-design-vue";
export class HeaderService {
    config = {
        headers: {
            accessToken: localStorage.getItem("accessToken") || ''
        }
    }

    getFirstActive() {
        return axios.get(`/public/header/get-first-active`).then((data) => {
            return data.data;
        }).catch((err) => {
            message.error("Has error when get header data!");
        })
    }
}