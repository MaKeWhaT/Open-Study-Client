import { useMutation } from "@tanstack/react-query";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEventHandler, PropsWithChildren, useState } from "react";
import tailwindColors from "tailwindcss/colors";
import Divider from "@/src/domains/common/components/Divider";
import Input from "@/src/domains/common/components/Input";
import NamedAvatar from "@/src/domains/common/components/NamedAvatar";
import Tag from "@/src/domains/common/components/Tag";
import Text from "@/src/domains/common/components/Text";
import TextLogo from "@/src/domains/common/components/TextLogo";
import { OPEN_STUDY_ROUTE_MAP } from "@/src/domains/common/constants";
import { addUser, checkUnique } from "@/src/domains/join/apis";

export default function JoinContainer() {
  const router = useRouter();
  const addUserMutation = useMutation(addUser);

  const [isEmailValidated, setIsEmailValidated] = useState(false);
  const [isPasswordValidated, setIsPasswordValidated] = useState(false);
  const [isNicknameValidated, setIsNicknameValidated] = useState(false);

  const [showDuplicatedEmailMessage, setShowDuplicatedEmailMessage] =
    useState(false);
  const [showDuplicatedNicknameMessage, setShowDuplicatedNicknameMessage] =
    useState(false);

  const [formState, setFormState] = useState({
    email: "",
    password: "",
    nickname: "",
  });

  const onChangeEmail: ChangeEventHandler<HTMLInputElement> = async (event) => {
    // TODO: 이메일 중복검사 실행. 중복시 인풋 하단에 중복되었음을 알림.
    const email = event.target.value;
    setFormState((prevFormState) => ({
      ...prevFormState,
      email,
    }));
    if (EMAIL_REGEX.test(email)) {
      const { isDup } = (
        await checkUnique({
          field: "email",
          value: email,
        })
      ).data;

      setIsEmailValidated(!isDup);
      setShowDuplicatedEmailMessage(isDup);
    } else {
      setIsEmailValidated(false);
    }
  };
  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    const password = event.target.value;
    setFormState((prevFormState) => ({
      ...prevFormState,
      password,
    }));
    setIsPasswordValidated(password.length > 0);
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
    if (nickname.length > 0) {
      const { isDup } = (
        await checkUnique({
          field: "nickname",
          value: nickname,
        })
      ).data;
      setIsNicknameValidated(!isDup);
      setShowDuplicatedNicknameMessage(isDup);
    } else {
      setIsNicknameValidated(false);
    }
  };

  const onClickJoin = () => {
    addUserMutation.mutate(formState, {
      onError() {
        // TODO: 회원가입 실패 토스트 메시지 표시
      },
      onSuccess() {
        // TODO: 회원가입 성공 토스트 메시지 표시
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
          <NamedAvatar size={150} name={formState.nickname} />
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
          {showDuplicatedEmailMessage && (
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
          {showDuplicatedNicknameMessage && (
            <ErrorText>중복된 닉네임입니다.</ErrorText>
          )}
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

const ErrorText = ({ children }: PropsWithChildren<{}>) => (
  <Text as="p" className="typo-regular-12 text-red-500">
    {children}
  </Text>
);
