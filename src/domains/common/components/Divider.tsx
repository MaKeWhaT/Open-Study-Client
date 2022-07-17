import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { IClassName } from "@/src/domains/common/types";

interface IDivider extends IClassName {}

export default function Divider({ className }: IDivider) {
  return (
    <hr
      className={twMerge(clsx("border-0 border-b border-gray-200", className))}
    />
  );
}
