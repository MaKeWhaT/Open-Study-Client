import { createAvatar } from "@dicebear/avatars";
import type { Options } from "@dicebear/avatars";
import * as style from "@dicebear/pixel-art";

interface INamedAvatar extends Options {}

export default function NamedAvatar({
  size = 50,
  dataUri = true,
  ...props
}: INamedAvatar) {
  const avatarSrc = createAvatar(style, {
    dataUri,
    size,
    ...props,
  });
  return (
    <div className="inline-block">
      <img src={avatarSrc} alt={`avatar-${props.seed}`} />
    </div>
  );
}
