import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "384px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        "vision-logo":
          "url('https://www.chess.com/bundles/web/images/color-icons/vision.70085a44.svg')",
        "vision-curve":
          "radial-gradient(102rem 21rem at top center,rgba(0,0,0,.14) 39.5%,rgba(2,1,1,0) 40%);",
      },
      keyframes: {
        disappear: {
          "80%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        disappear: "disappear 1s forwards",
      },
    },
  },
  plugins: [],
};
export default config;
