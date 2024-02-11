import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        ssm: { max: "330px" },
        sm: { max: "480px" },
        med: { max: "840px" },
        xl: { max: "1024px" },
      },
      colors: {
        darkBg: "#040411",
        lightBg: "#f5f5f5",
        darkText: "#a1a1aa",
        hoverDarkText: "#fafafa",
        darkTitle: "#d4d4d8",
        darkSubTitle: "#f4f4f5",
        linkHover: "#434343b3",
        border: "#262626",
      },
    },
  },
  plugins: [require('@shrutibalasa/tailwind-grid-auto-fit'),],
};
export default config;
