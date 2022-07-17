import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Login from "@/pages/login";
import Layout from "@/src/domains/common/components/Layout";

export default {
  title: "Pages/Login",
  component: Login,
  decorators: [
    (Story) => (
      <Layout header={true}>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof Login>;

export const Default: ComponentStory<typeof Login> = () => <Login />;
