const path = require("path");
const { merge } = require("webpack-merge");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: false,
  images: {
    domains: ["cdn.pixabay.com"],
  },
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
