import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BACKEND,
});

export default instance