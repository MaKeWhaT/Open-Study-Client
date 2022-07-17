import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Pins from "@/pages/pins";
import Layout from "@/src/domains/common/components/Layout";

export default {
  title: "Pages/Pins",
  component: Pins,
  decorators: [
    (Story) => (
      <Layout header={true}>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof Pins>;

export const Default: ComponentStory<typeof Pins> = () => <Pins />;
