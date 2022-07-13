import { AxiosRequestConfig } from "axios";

export const DEFAULT_AXIOS_REQUEST_CONFIG: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_DEFAULT_AXIOS_REQUEST_BASE_URL,
  timeout: Number(process.env.NEXT_PUBLIC_DEFAULT_AXIOS_REQUEST_TIMEOUT),
};
