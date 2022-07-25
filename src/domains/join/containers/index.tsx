/* eslint-disable react-hooks/exhaustive-deps */
import { useMutation } from "@tanstack/react-query";
import clsx from "clsx";
import { debounce } from "lodash-es";
import Link from "next/link";
import { useRouter } from "next/router";
import React, {
  ChangeEventHandler,
  PropsWithChildren,
  useCallback,
  useState,
} from "react";
import tailwindColors from "tailwindcss/colors";
import Divider from "@/src/domains/common/components/Divider";
import Input from "@/src/domains/common/components/Input";
import NamedAvatar from "@/src/domains/common/components/NamedAvatar";
import Tag from "@/src/domains/common/components/Tag";
import Text from "@/src/domains/common/components/Text";
import TextLogo from "@/src/domains/common/components/TextLogo";
import { OPEN_STUDY_ROUTE_MAP } from "@/src/domains/common/constants";
import { OPEN_STUDY_ACCESS_TOKEN_KEY } from "@/src/domains/common/constants/storage";
import useLocalStorage from "@/src/domains/common/hooks/useLocalStorage";
import { addUser, checkUnique, UserJoinForm } from "@/src/domains/join/apis";

export default function JoinContainer() {
  const router = useRouter();
  const addUserMutation = useMutation(addUser);
  const [, setAccessTokenToStorage] = useLocalStorage({
    key: OPEN_STUDY_ACCESS_TOKEN_KEY,
    defaultValue: "",
  });
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    nickname: "",
  });

  const [isEmailValidated, setIsEmailValidated] = useState(false);
  const [isPasswordValidated, setIsPasswordValidated] = useState(false);
  const [isNicknameValidated, setIsNicknameValidated] = useState(false);

  const [isEmailDuplicated, setIsEmailDuplicated] = useState(false);
  const [isNicknameDuplicated, setIsNicknameDuplicated] = useState(false);

  const checkIsUniqueEmail = useCallback(
    async (email: UserJoinForm["email"]) => {
      return setIsEmailDuplicated(
        (await checkUnique({ field: "email", value: email })).data.isDup,
      );
    },
    [setIsEmailDuplicated],
  );

  const checkIsUniqueNickname = useCallback(
    async (nickname: UserJoinForm["nickname"]) => {
      return setIsNicknameDuplicated(
        (await checkUnique({ field: "nickname", value: nickname })).data.isDup,
      );
    },
    [setIsNicknameDuplicated],
  );

  const debouncedCheckIsUniqueEmail = useCallback(
    debounce(checkIsUniqueEmail, 500),
    [checkIsUniqueEmail],
  );
  const debouncedCheckIsUniqueNickname = useCallback(
    debounce(checkIsUniqueNickname, 500),
    [checkIsUniqueNickname],
  );

  const onChangeEmail: ChangeEventHandler<HTMLInputElement> = async (event) => {
    // TODO: 이메일 중복검사 실행. 중복시 인풋 하단에 중복되었음을 알림.
    const email = event.target.value;
    setFormState((prevFormState) => ({
      ...prevFormState,
      email,
    }));
    setIsEmailValidated(() => {
      const isValid = validateEmail(email);
      if (isValid) {
        debouncedCheckIsUniqueEmail(email);
      }
      return isValid;
    });
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    const password = event.target.value;
    setFormState((prevFormState) => ({
      ...prevFormState,
      password,
    }));
    setIsPasswordValidated(validatePassword(password));
  };

  const onChangeNickname: ChangeEventHandler<HTMLInputElement> = async (
    event,
  ) => {
    // TODO: 닉네임 중복검사 실행. 중복시 인풋 하단에 중복되었음을 알림.
    const nickname = event.target.value;
    setFormState((prevFormState) => ({
      ...prevFormState,
      nickname,
    }));
    setIsNicknameValidated(() => {
      const isValid = validateNickName(nickname);
      if (isValid) {
        debouncedCheckIsUniqueNickname(nickname);
      }
      return isValid;
    });
  };

  const onClickJoin = () => {
    addUserMutation.mutate(formState, {
      onError() {
        // TODO: 회원가입 실패 토스트 메시지 표시
      },
      onSuccess({ data }) {
        // TODO: 회원가입 성공 토스트 메시지 표시
        setAccessTokenToStorage(data.accessToken);
        router.push(OPEN_STUDY_ROUTE_MAP.HOME);
      },
    });
  };

  const isAllFormsValidated =
    isEmailValidated && isPasswordValidated && isNicknameValidated;
  return (
    <article className="mt-[100px]">
      <div className="mx-auto max-w-[600px] rounded-[4px] border border-gray-200 bg-white p-[20px]">
        <div className="text-center">
          <TextLogo as="h2" className="typo-bold-32">
            <Link href="/" passHref>
              <a>Open Study</a>
            </Link>
          </TextLogo>
        </div>
        <div className="my-[20px]">
          <Divider className="border-gray-100" />
        </div>
        <div className="relative mb-[20px] text-center">
          <NamedAvatar size={150} seed={formState.nickname} />
          <Tag
            className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gray-100/70 text-[14px] font-medium"
            text={formState.nickname || "what's your name?"}
          />
        </div>

        <div className="mb-[20px] flex flex-col gap-y-[5px]">
          <Input
            className="block w-full rounded-[4px] border border-gray-200 py-[10px] pl-[20px] text-center text-gray-500 placeholder:typo-regular-16"
            placeholder="이메일"
            type="text"
            autoComplete="new-password"
            name="email"
            value={formState.email}
            onChange={onChangeEmail}
          />
          {isEmailDuplicated && (
            <ErrorText>중복된 이메일 주소입니다.</ErrorText>
          )}
          <Input
            className="block w-full rounded-[4px] border border-gray-200 py-[10px] pl-[20px] text-center text-gray-500 placeholder:typo-regular-16"
            placeholder="비밀번호"
            type="password"
            autoComplete="new-password"
            name="password"
            value={formState.password}
            onChange={onChangePassword}
          />
          <Input
            className="block w-full rounded-[4px] border border-gray-200 py-[10px] pl-[20px] text-center text-gray-500 placeholder:typo-regular-16"
            placeholder="닉네임"
            type="text"
            autoComplete="new-password"
            name="nickname"
            value={formState.nickname}
            onChange={onChangeNickname}
          />
          {isNicknameDuplicated && <ErrorText>중복된 닉네임입니다.</ErrorText>}
        </div>
        <div className="text-center">
          <button
            className={clsx("px-[20px] py-[10px]", {
              "cursor-not-allowed": !isAllFormsValidated,
            })}
            disabled={!isAllFormsValidated}
            onClick={onClickJoin}
          >
            <Text
              style={{
                WebkitTextStroke: isAllFormsValidated
                  ? `unset`
                  : `1px ${tailwindColors.gray[400]}`,
              }}
              className={clsx("typo-black-32 text-white transition-all", {
                "inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent":
                  isAllFormsValidated,
              })}
            >
              Let's Study!
            </Text>
          </button>
        </div>
      </div>
    </article>
  );
}

const EMAIL_REGEX = /^[a-z0-9_.]+@[a-z0-9]+\.[a-z]+$/;

const validateEmail = (email: UserJoinForm["email"]) => {
  return EMAIL_REGEX.test(email);
};

const validatePassword = (password: UserJoinForm["password"]) => {
  return password.length > 0;
};

const validateNickName = (nickname: UserJoinForm["nickname"]) => {
  return nickname.length > 0;
};

const ErrorText = ({ children }: PropsWithChildren<{}>) => (
  <Text as="p" className="typo-regular-12 text-red-500">
    {children}
  </Text>
);
