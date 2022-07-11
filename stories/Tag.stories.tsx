import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Tag from "@/src/domains/common/components/Tag";

export default {
  title: "Domains/Common/Components/Tag",
  component: Tag,
  args: {
    text: "Tag",
  },
} as ComponentMeta<typeof Tag>;

export const Default: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
