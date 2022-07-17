import type { ComponentMeta, ComponentStory } from "@storybook/react";
import TextLogo from "@/src/domains/common/components/TextLogo";

export default {
  title: "Domains/Common/Components/TextLogo",
  component: TextLogo,
  args: {
    as: "h1",
    content: "Open-Study",
  },
} as ComponentMeta<typeof TextLogo>;

export const Default: ComponentStory<typeof TextLogo> = (args) => (
  <TextLogo {...args} />
);

export const TypoBold = Default.bind({});
TypoBold.args = {
  className: "typo-bold-24",
};

export const TypoLight = Default.bind({});
TypoLight.args = {
  className: "typo-light-24",
};
