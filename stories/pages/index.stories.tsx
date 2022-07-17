import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Index from "@/pages/";
import Layout from "@/src/domains/common/components/Layout";

export default {
  title: "Pages/Index",
  component: Index,
  decorators: [
    (Story) => (
      <Layout header={true}>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof Index>;

export const Default: ComponentStory<typeof Index> = () => <Index />;
