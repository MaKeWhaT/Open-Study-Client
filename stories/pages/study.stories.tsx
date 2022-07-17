import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Study from "@/pages/study";
import Layout from "@/src/domains/common/components/Layout";

export default {
  title: "Pages/Study",
  component: Study,
  decorators: [
    (Story) => (
      <Layout header={true}>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof Study>;

export const Default: ComponentStory<typeof Study> = () => <Study />;
