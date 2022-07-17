import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Feeds from "@/pages/feeds";
import Layout from "@/src/domains/common/components/Layout";

export default {
  title: "Pages/Feeds",
  component: Feeds,
  decorators: [
    (Story) => (
      <Layout header={true}>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof Feeds>;

export const Default: ComponentStory<typeof Feeds> = () => <Feeds />;
