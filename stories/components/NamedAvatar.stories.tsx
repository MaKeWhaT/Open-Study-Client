import type { ComponentMeta, ComponentStory } from "@storybook/react";
import NamedAvatar from "@/src/domains/common/components/NamedAvatar";

export default {
  title: "Domains/Common/Components/NamedAvatar",
  component: NamedAvatar,
  args: {
    size: 50,
    name: "함성준",
  },
} as ComponentMeta<typeof NamedAvatar>;

export const Default: ComponentStory<typeof NamedAvatar> = (args) => (
  <NamedAvatar {...args} />
);
