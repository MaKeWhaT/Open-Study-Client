import clsx from "clsx";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { IClassName } from "@/src/domains/common/types";

interface ITag extends IClassName {
  text?: string;
}

export default function Tag({ className, text }: PropsWithChildren<ITag>) {
  if (!text) return null;
  return (
    <span
      className={twMerge(
        clsx(
          "rounded-md bg-black/10 px-[6px] py-[2px] text-[10px] font-bold text-gray-800",
          className,
        ),
      )}
    >
      {text}
    </span>
  );
}
