import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { IClassName } from "@/src/domains/common/types";

export interface IText
  extends PropsWithChildren<HTMLAttributes<HTMLElement>>,
    IClassName {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  content?: string;
}

export default function Text({
  className,
  as: As = "span",
  content,
  children,
  ...props
}: IText) {
  return (
    <As className={twMerge(clsx("text-gray-700", className))} {...props}>
      {content ?? children}
    </As>
  );
}
