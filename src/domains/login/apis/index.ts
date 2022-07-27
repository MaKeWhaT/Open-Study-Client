import { AxiosResponse } from "axios";
import axios from "@/src/domains/common/apis/axios/instance";
import { UserJoinForm } from "@/src/domains/join/apis";

export type UserLoginForm = Omit<UserJoinForm, "nickname">;

type AxiosLoginFunction = (
  form: UserLoginForm,
) => Promise<AxiosResponse<{ OK: boolean; accessToken: string | null }>>;

export const login: AxiosLoginFunction = (form) => {
  return axios.post("/user/login", form);
};
