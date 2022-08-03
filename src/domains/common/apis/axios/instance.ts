import axios, { AxiosError } from "axios";
import { OPEN_STUDY_ROUTE_MAP } from "@/src/domains/common/constants";
import { DEFAULT_AXIOS_REQUEST_CONFIG } from "@/src/domains/common/constants/axios";

const defaultAxiosInstance = axios.create(DEFAULT_AXIOS_REQUEST_CONFIG);

defaultAxiosInstance.interceptors.request.use(
  function (config) {
    // 요청이 전달되기 전에 작업 수행
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);

// 응답 인터셉터 추가하기
defaultAxiosInstance.interceptors.response.use(
  function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  function (error: AxiosError) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    if (error.response?.status === 401) {
      window.location.href = `${window.location.origin}/${OPEN_STUDY_ROUTE_MAP.LOGIN}`;
    }
    return Promise.reject(error);
  },
);

export default defaultAxiosInstance;
