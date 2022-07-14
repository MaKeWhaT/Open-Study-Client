import { HTMLAttributes, PropsWithChildren } from "react";
import { IClassName } from "@/src/domains/common/types";

interface IText
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
    <As className={className} {...props}>
      {content ?? children}
    </As>
  );
}
