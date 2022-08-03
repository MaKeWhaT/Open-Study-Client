import { AxiosInstance, AxiosResponse } from "axios";
import axios from "@/src/domains/common/apis/axios/instance";
import { OPEN_STUDY_ACCESS_TOKEN_KEY } from "@/src/domains/common/constants/storage";

type AxiosGetMeFunction = () => Promise<
  AxiosResponse<{
    _id: string;
    email: string;
    password: string;
    nickname: string;
    level: number;
    experience: number;
    labels: Array<string>;
    iat: number;
    exp: number;
  }>
>;

const getAccessToken = () =>
  localStorage.getItem(OPEN_STUDY_ACCESS_TOKEN_KEY) ?? "";

const withAuth = (axiosInstance: AxiosInstance) => {
  axiosInstance.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${getAccessToken()}`;
  return axiosInstance;
};

export const checkAuth = () => {
  return withAuth(axios).get("/user/check-auth");
};

export const getMe: AxiosGetMeFunction = () => {
  return withAuth(axios).get("/user/me");
};
