import { useRouter } from "next/router";
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useState,
} from "react";
import FormBox from "@/src/domains/common/components/FormBox";
import { OPEN_STUDY_ROUTE_MAP } from "@/src/domains/common/constants";
import { OPEN_STUDY_ACCESS_TOKEN_KEY } from "@/src/domains/common/constants/storage";
import useLocalStorage from "@/src/domains/common/hooks/useLocalStorage";
import { useLoginUserMutation } from "@/src/domains/login/query";

export default function LoginContainer() {
  const router = useRouter();
  const loginUserMutation = useLoginUserMutation();
  const [, setAccessTokenToStorage, removeAccessTokenFromStorage] =
    useLocalStorage({
      key: OPEN_STUDY_ACCESS_TOKEN_KEY,
      defaultValue: "",
    });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };
  const onEnterKeyUp: KeyboardEventHandler<HTMLInputElement> = (event) => {
    const { key, keyCode } = event;
    if (key === "Enter" || keyCode === 13) {
      onClickLogin();
    }
  };

  const onClickLogin = async () => {
    loginUserMutation.mutate(
      { email, password },
      {
        onError() {
          // TODO: 로그인 API 에러 메시지 표시, Axios Error Interceptor랑 역할이 충돌하는 부분.
        },
        onSuccess({ data }) {
          const { OK: isLoginSucceed, accessToken } = data;
          if (isLoginSucceed) {
            // TODO: 로그인 성공 토스트 메시지 표시
            setAccessTokenToStorage(accessToken);
            router.push(OPEN_STUDY_ROUTE_MAP.HOME);
          } else {
            // TODO: 로그인 실패 토스트 메시지 표시
          }
        },
      },
    );
  };

  useEffect(() => {
    removeAccessTokenFromStorage();
  }, [removeAccessTokenFromStorage]);

  return (
    <div className="mt-[100px]">
      <FormBox className="mx-auto">
        <div className="text-center">
          <FormBox.Logo />
        </div>
        <FormBox.VerticalDivider />
        <div className="mb-[20px] flex flex-col gap-y-[10px]">
          <FormBox.FormInput
            placeholder="이메일"
            type="text"
            name="email"
            value={email}
            onChange={onChangeEmail}
          />
          <FormBox.FormInput
            placeholder="비밀번호"
            type="password"
            name="password"
            value={password}
            onChange={onChangePassword}
            onKeyUp={onEnterKeyUp}
          />
        </div>
        <div className="flex gap-x-[20px]">
          <FormBox.LoginButton onClick={onClickLogin} />
          <FormBox.JoinButton />
        </div>
      </FormBox>
    </div>
  );
}
