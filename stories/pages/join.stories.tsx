import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Join from "@/pages/join";
import Layout from "@/src/domains/common/components/Layout";

export default {
  title: "Pages/Join",
  component: Join,
  decorators: [
    (Story) => (
      <Layout header={false}>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof Join>;

export const Default: ComponentStory<typeof Join> = () => <Join />;
