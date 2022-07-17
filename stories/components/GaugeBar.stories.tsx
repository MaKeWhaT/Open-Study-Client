import type { ComponentMeta, ComponentStory } from "@storybook/react";
import GaugeBar from "@/src/domains/common/components/GaugeBar";

export default {
  title: "Domains/Common/Components/GaugeBar",
  component: GaugeBar,
  args: {
    currentValue: 66,
    totalValue: 100,
  },
} as ComponentMeta<typeof GaugeBar>;

export const Default: ComponentStory<typeof GaugeBar> = (args) => (
  <GaugeBar {...args} />
);
