/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("./tailwind/plugins/typography.js"),
  ],
};
