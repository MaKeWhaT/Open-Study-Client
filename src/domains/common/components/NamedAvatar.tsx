import Avatar, { AvatarProps } from "boring-avatars";
import {
  OPEN_STUDY_BRAND_COLOR_INDIGO,
  OPEN_STUDY_BRAND_COLOR_PINK,
  OPEN_STUDY_BRAND_COLOR_PURPLE,
} from "@/src/domains/common/constants";
import { IClassName } from "@/src/domains/common/types";

interface INamedAvatar extends AvatarProps {
  size?: number;
  name: string;
}

export default function NamedAvatar({ size = 50, name }: INamedAvatar) {
  return (
    <div className="inline-block">
      <Avatar
        size={size}
        name={name}
        variant="beam"
        colors={[
          OPEN_STUDY_BRAND_COLOR_INDIGO,
          OPEN_STUDY_BRAND_COLOR_PURPLE,
          OPEN_STUDY_BRAND_COLOR_PINK,
        ]}
      />
    </div>
  );
}
