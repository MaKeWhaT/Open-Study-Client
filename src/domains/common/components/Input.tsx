import clsx from "clsx";
import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";
import { IClassName } from "@/src/domains/common/types";

export interface IInput extends HTMLProps<HTMLInputElement>, IClassName {}

export default function Input({ className, ...props }: IInput) {
  return (
    <input
      className={twMerge(clsx("text-gray-700 outline-none", className))}
      {...props}
    />
  );
}
