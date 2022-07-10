import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "@/src/domains/common/components/Header";

export default {
  title: "Domains/Common/Components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

export const Default: ComponentStory<typeof Header> = () => <Header />;
