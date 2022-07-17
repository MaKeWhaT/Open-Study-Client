import clsx from "clsx";
import Link from "next/link";
import React, { ChangeEventHandler, useState } from "react";
import tailwindColors from "tailwindcss/colors";
import Divider from "@/src/domains/common/components/Divider";
import Input from "@/src/domains/common/components/Input";
import NamedAvatar from "@/src/domains/common/components/NamedAvatar";
import Tag from "@/src/domains/common/components/Tag";
import Text from "@/src/domains/common/components/Text";
import TextLogo from "@/src/domains/common/components/TextLogo";

export default function JoinContainer() {
  const [formsValidated] = useState(false);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    nickname: "",
  });
  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormState(() => ({
      ...formState,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <article className="mt-[250px]">
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
            className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gray-100/70 text-[12px] font-medium"
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
            onChange={onChangeInput}
          />
          <Input
            className="block w-full rounded-[4px] border border-gray-200 py-[10px] pl-[20px] text-center text-gray-500 placeholder:typo-regular-16"
            placeholder="비밀번호"
            type="password"
            autoComplete="new-password"
            name="password"
            value={formState.password}
            onChange={onChangeInput}
          />
          <Input
            className="block w-full rounded-[4px] border border-gray-200 py-[10px] pl-[20px] text-center text-gray-500 placeholder:typo-regular-16"
            placeholder="닉네임"
            type="text"
            autoComplete="off"
            name="nickname"
            value={formState.nickname}
            onChange={onChangeInput}
          />
        </div>
        <div className="text-center">
          <button
            className={clsx("px-[20px] py-[10px]", {
              "cursor-not-allowed": !formsValidated,
            })}
            disabled={!formsValidated}
          >
            <Text
              style={{
                WebkitTextStroke: formsValidated
                  ? `unset`
                  : `1px ${tailwindColors.gray[400]}`,
              }}
              className={clsx("typo-black-32 text-white transition-all", {
                "inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent":
                  formsValidated,
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
