import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import Text, { IText } from "@/src/domains/common/components/Text";

interface ITextLogo extends IText {}

export default function TextLogo({
  className,
  as,
  content,
  children,
}: ITextLogo) {
  return (
    <Text
      className={twMerge(
        clsx(
          "inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent",
          className,
        ),
      )}
      as={as}
    >
      {content ?? children}
    </Text>
  );
}
