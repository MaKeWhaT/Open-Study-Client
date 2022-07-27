import clsx from "clsx";
import Link from "next/link";
import { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import Divider from "@/src/domains/common/components/Divider";
import Input, { IInput } from "@/src/domains/common/components/Input";
import TextLogo from "@/src/domains/common/components/TextLogo";
import { IClassName } from "@/src/domains/common/types";

function FormBox({ className, children }: PropsWithChildren<IClassName>) {
  return (
    <article
      className={twMerge(
        clsx(
          "max-w-[600px] rounded-[4px] border border-gray-200 bg-white p-[20px]",
          className,
        ),
      )}
    >
      {children}
    </article>
  );
}

const Logo = () => {
  return (
    <TextLogo as="h2" className="typo-bold-32">
      <Link href="/" passHref>
        <a>Open Study</a>
      </Link>
    </TextLogo>
  );
};

const VerticalDivider = ({ className }: IClassName) => {
  return (
    <div className={twMerge(clsx("my-[20px]", className))}>
      <Divider className="border-gray-200" />
    </div>
  );
};

interface IFormInput extends IInput {}
const FormInput = ({ ...props }: IFormInput) => {
  return (
    <Input
      className="block w-full rounded-[4px] border border-gray-200 py-[10px] pl-[20px] text-gray-500 placeholder:typo-regular-16"
      {...props}
    />
  );
};

const LoginButton = ({ ...props }: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="typo-medium-16 block w-full rounded-[4px] bg-indigo-500 py-[8px] text-white hover:shadow-sm hover:shadow-indigo-700"
      {...props}
    >
      로그인
    </button>
  );
};
const JoinButton = () => {
  return (
    <Link href="/join" passHref>
      <button className="typo-medium-16 block w-full rounded-[4px] bg-gray-100 py-[8px] text-gray-700 hover:shadow-sm hover:shadow-gray-300">
        <a>회원가입</a>
      </button>
    </Link>
  );
};

FormBox.Logo = Logo;
FormBox.VerticalDivider = VerticalDivider;
FormBox.FormInput = FormInput;
FormBox.LoginButton = LoginButton;
FormBox.JoinButton = JoinButton;

export default FormBox;
