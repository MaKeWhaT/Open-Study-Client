import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import Avatar from "@/src/domains/common/components/Avatar";
import GaugeBar from "@/src/domains/common/components/GaugeBar";
import Tag from "@/src/domains/common/components/Tag";
import { IClassName } from "@/src/domains/common/types";

interface IProfile extends IClassName {}

export default function Profile({ className }: IProfile) {
  return (
    <div className={twMerge(clsx("flex w-[250px] gap-x-[5px]", className))}>
      <div className="flex w-[45px] flex-shrink-0 flex-grow-0 items-center">
        <Avatar
          className="rounded-lg"
          imageSrc="https://cdn.pixabay.com/photo/2022/07/06/12/58/woman-7305088_1280.jpg"
          imageWidth={45}
          imageHeight={45}
        />
      </div>
      <div className="flex w-[200px] flex-shrink-0 flex-grow-0 flex-col justify-center">
        <div className="flex w-full text-[14px]">
          <span className="text-gray-700 line-clamp-1">익명의 나비</span>
          <Tag
            className="ml-auto flex-shrink-0 flex-grow-0"
            text={"Lv. 3"}
          ></Tag>
        </div>
        <div>
          <GaugeBar
            classes={{ bar: "mt-[4px]" }}
            currentValue={47}
            totalValue={100}
          />
        </div>
      </div>
    </div>
  );
}
