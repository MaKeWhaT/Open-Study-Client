import { AxiosRequestConfig } from "axios";
import { OPEN_STUDY_ACCESS_TOKEN_KEY } from "@/src/domains/common/constants/storage";

export const DEFAULT_AXIOS_REQUEST_CONFIG: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_DEFAULT_AXIOS_REQUEST_BASE_URL,
  timeout: Number(process.env.NEXT_PUBLIC_DEFAULT_AXIOS_REQUEST_TIMEOUT),
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${
      typeof window !== "undefined"
        ? localStorage.getItem(OPEN_STUDY_ACCESS_TOKEN_KEY)
        : null
    }`,
  },
};
