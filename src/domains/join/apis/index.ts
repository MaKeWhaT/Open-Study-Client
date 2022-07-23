import { AxiosResponse } from "axios";
import axios from "@/src/domains/common/apis/axios/instance";

type AxiosAddUserFunction = (form: {
  email: string;
  password: string;
  nickname: string;
}) => Promise<AxiosResponse>;

export const addUser: AxiosAddUserFunction = (form) => {
  return axios.post("/user/join", form);
};
