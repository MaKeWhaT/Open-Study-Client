import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Divider from "@/src/domains/common/components/Divider";

export default {
  title: "Domains/Common/Components/Divider",
  component: Divider,
} as ComponentMeta<typeof Divider>;

export const Default: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);
