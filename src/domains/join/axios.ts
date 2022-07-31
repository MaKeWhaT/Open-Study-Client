import { AxiosResponse } from "axios";
import axios from "@/src/domains/common/apis/axios/instance";

export interface UserJoinForm {
  email: string;
  password: string;
  nickname: string;
}

type AxiosAddUserFunction = (
  form: UserJoinForm,
) => Promise<AxiosResponse<{ accessToken: string }>>;

export const addUser: AxiosAddUserFunction = (form) => {
  return axios.post("/user/join", form);
};

type AxiosCheckUniqueFunction = (form: {
  field: keyof UserJoinForm;
  value: string;
}) => Promise<AxiosResponse<{ isDup: boolean }>>;

export const checkUnique: AxiosCheckUniqueFunction = ({ field, value }) => {
  return axios.get(`/user/join/check-unique?field=${field}&value=${value}`);
};
