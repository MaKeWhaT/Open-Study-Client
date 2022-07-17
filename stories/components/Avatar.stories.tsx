import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Avatar from "@/src/domains/common/components/Avatar";

export default {
  title: "Domains/Common/Components/Avatar",
  component: Avatar,
  args: {
    imageSrc:
      "https://cdn.pixabay.com/photo/2022/07/04/06/25/butterfly-7300501_1280.jpg",
    imageWidth: 45,
    imageHeight: 45,
  },
} as ComponentMeta<typeof Avatar>;

export const Default: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
);
