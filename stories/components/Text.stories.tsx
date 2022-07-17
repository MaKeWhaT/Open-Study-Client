import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Text from "@/src/domains/common/components/Text";

export default {
  title: "Domains/Common/Components/Text",
  component: Text,
  args: {
    as: "h1",
    content: "안녕하세요 Open-Study",
  },
} as ComponentMeta<typeof Text>;

export const Default: ComponentStory<typeof Text> = (args) => (
  <Text {...args} />
);

export const Black: ComponentStory<typeof Text> = (args) => {
  return (
    <div>
      <Text className="typo-black-32" {...args} />
      <Text className="typo-black-30" {...args} />
      <Text className="typo-black-28" {...args} />
      <Text className="typo-black-26" {...args} />
      <Text className="typo-black-24" {...args} />
      <Text className="typo-black-22" {...args} />
      <Text className="typo-black-20" {...args} />
      <Text className="typo-black-18" {...args} />
      <Text className="typo-black-16" {...args} />
      <Text className="typo-black-14" {...args} />
      <Text className="typo-black-12" {...args} />
      <Text className="typo-black-10" {...args} />
    </div>
  );
};

export const Bold: ComponentStory<typeof Text> = (args) => {
  return (
    <div>
      <Text className="typo-bold-32" {...args} />
      <Text className="typo-bold-30" {...args} />
      <Text className="typo-bold-28" {...args} />
      <Text className="typo-bold-26" {...args} />
      <Text className="typo-bold-24" {...args} />
      <Text className="typo-bold-22" {...args} />
      <Text className="typo-bold-20" {...args} />
      <Text className="typo-bold-18" {...args} />
      <Text className="typo-bold-16" {...args} />
      <Text className="typo-bold-14" {...args} />
      <Text className="typo-bold-12" {...args} />
      <Text className="typo-bold-10" {...args} />
    </div>
  );
};

export const Medium: ComponentStory<typeof Text> = (args) => {
  return (
    <div>
      <Text className="typo-medium-32" {...args} />
      <Text className="typo-medium-30" {...args} />
      <Text className="typo-medium-28" {...args} />
      <Text className="typo-medium-26" {...args} />
      <Text className="typo-medium-24" {...args} />
      <Text className="typo-medium-22" {...args} />
      <Text className="typo-medium-20" {...args} />
      <Text className="typo-medium-18" {...args} />
      <Text className="typo-medium-16" {...args} />
      <Text className="typo-medium-14" {...args} />
      <Text className="typo-medium-12" {...args} />
      <Text className="typo-medium-10" {...args} />
    </div>
  );
};

export const Regular: ComponentStory<typeof Text> = (args) => {
  return (
    <div>
      <Text className="typo-regular-32" {...args} />
      <Text className="typo-regular-30" {...args} />
      <Text className="typo-regular-28" {...args} />
      <Text className="typo-regular-26" {...args} />
      <Text className="typo-regular-24" {...args} />
      <Text className="typo-regular-22" {...args} />
      <Text className="typo-regular-20" {...args} />
      <Text className="typo-regular-18" {...args} />
      <Text className="typo-regular-16" {...args} />
      <Text className="typo-regular-14" {...args} />
      <Text className="typo-regular-12" {...args} />
      <Text className="typo-regular-10" {...args} />
    </div>
  );
};

export const DemiLight: ComponentStory<typeof Text> = (args) => {
  return (
    <div>
      <Text className="typo-demilight-32" {...args} />
      <Text className="typo-demilight-30" {...args} />
      <Text className="typo-demilight-28" {...args} />
      <Text className="typo-demilight-26" {...args} />
      <Text className="typo-demilight-24" {...args} />
      <Text className="typo-demilight-22" {...args} />
      <Text className="typo-demilight-20" {...args} />
      <Text className="typo-demilight-18" {...args} />
      <Text className="typo-demilight-16" {...args} />
      <Text className="typo-demilight-14" {...args} />
      <Text className="typo-demilight-12" {...args} />
      <Text className="typo-demilight-10" {...args} />
    </div>
  );
};

export const Light: ComponentStory<typeof Text> = (args) => {
  return (
    <div>
      <Text className="typo-light-32" {...args} />
      <Text className="typo-light-30" {...args} />
      <Text className="typo-light-28" {...args} />
      <Text className="typo-light-26" {...args} />
      <Text className="typo-light-24" {...args} />
      <Text className="typo-light-22" {...args} />
      <Text className="typo-light-20" {...args} />
      <Text className="typo-light-18" {...args} />
      <Text className="typo-light-16" {...args} />
      <Text className="typo-light-14" {...args} />
      <Text className="typo-light-12" {...args} />
      <Text className="typo-light-10" {...args} />
    </div>
  );
};

export const Thin: ComponentStory<typeof Text> = (args) => {
  return (
    <div>
      <Text className="typo-thin-32" {...args} />
      <Text className="typo-thin-30" {...args} />
      <Text className="typo-thin-28" {...args} />
      <Text className="typo-thin-26" {...args} />
      <Text className="typo-thin-24" {...args} />
      <Text className="typo-thin-22" {...args} />
      <Text className="typo-thin-20" {...args} />
      <Text className="typo-thin-18" {...args} />
      <Text className="typo-thin-16" {...args} />
      <Text className="typo-thin-14" {...args} />
      <Text className="typo-thin-12" {...args} />
      <Text className="typo-thin-10" {...args} />
    </div>
  );
};
