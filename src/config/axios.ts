import { default as axios } from "axios";

export const apiClient = axios.create({
    baseURL: "/api",
    headers: {
        "Content-type": "application/json"
    }
});