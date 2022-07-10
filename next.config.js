const path = require("path");
const { merge } = require("webpack-merge");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: false,
  webpack(config) {
    return merge(config, {
      resolve: {
        alias: {
          "@": path.resolve(__dirname),
        },
      },
    });
  },
};

module.exports = nextConfig;
