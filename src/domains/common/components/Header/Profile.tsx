import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import NamedAvatar from "@/src/domains/common/components/NamedAvatar";
import Tag from "@/src/domains/common/components/Tag";
import { useMeQuery } from "@/src/domains/common/query";
import { IClassName } from "@/src/domains/common/types";

interface IProfile extends IClassName {}

export default function Profile({ className }: IProfile) {
  const { data, isLoading } = useMeQuery();
  const { nickname } = data?.data ?? {};

  return (
    <div className={twMerge(clsx("flex gap-x-[5px]", className))}>
      <div className="flex flex-shrink-0 items-center">
        <div className="h-[45px] w-[45px] overflow-hidden rounded-full border border-gray-200 p-[2px] hover:cursor-pointer hover:border-gray-400">
          <NamedAvatar size={40} seed={nickname} />
        </div>
      </div>
    </div>
  );
}
