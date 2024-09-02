import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-purple":
          "linear-gradient(90deg, rgba(7,15,34,1) 17%, rgba(17,33,75,1) 56%, rgba(9,18,40,1) 90%, rgba(5,11,24,1) 100%)",
      },
      colors: {
        yellow: {
          primary: "rgb(235, 157, 12)",
        },
        dark: {
          primary: "rgb(2, 4, 9)",
        },
        gray: {
          primary: "#323443",
          secondary: "#D4D4D4",
        },
      },
      minHeight: {
        header: "calc(550px - 80px)",
      },
      maxHeight: {
        header: "calc(1000px - 80px)",
      },
      height: {
        header: "calc(100vh - 80px)",
      },
    },
  },
  plugins: [],
};
export default config;
