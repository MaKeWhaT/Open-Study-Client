const path = require("path");
const { merge } = require("webpack-merge");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next",
  ],
  framework: "@storybook/react",
  features: {
    storyStoreV7: true,
  },
  core: {
    builder: "@storybook/builder-webpack5",
    options: {
      lazyCompilation: true,
      fsCache: true,
    },
  },
  webpackFinal: async (config) => {
    return merge(config, {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../"),
        },
      },
    });
  },
};
