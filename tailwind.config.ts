import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto Serif", "serif"],
        inter: ["Inter", "sans-serif"],
        lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
