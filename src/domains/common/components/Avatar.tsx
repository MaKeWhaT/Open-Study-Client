import clsx from "clsx";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { IClassName } from "@/src/domains/common/types";

interface IAvatar extends IClassName {
  imageSrc: string;
  imageAlt?: string;
  imageWidth: number;
  imageHeight: number;
}

export default function Avatar({
  className,
  imageSrc,
  imageAlt = "avatar-image!",
  imageWidth,
  imageHeight,
}: IAvatar) {
  return (
    <Image
      className={twMerge(clsx("rounded-full", className))}
      src={imageSrc}
      alt={imageAlt}
      width={imageWidth}
      height={imageHeight}
      objectFit="cover"
      layout="fixed"
    />
  );
}
