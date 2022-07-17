import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "@/src/domains/common/components/Input";

export default {
  title: "Domains/Common/Components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);
