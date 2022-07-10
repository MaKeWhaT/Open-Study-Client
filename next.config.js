const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: false,
  webpack(config) {
    config.resolve.alias = {
      "@": path.resolve(__dirname),
      ...config.resolve.alias,
    };
    return config;
  },
};

module.exports = nextConfig;
