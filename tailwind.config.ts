import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

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
    },
  },
  plugins: [require('@shrutibalasa/tailwind-grid-auto-fit'),],
};
export default config;
