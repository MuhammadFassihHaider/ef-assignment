import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#2B3743',
        'very-dark-blue': '#202D36',
        'very-light-blue': 'hsl(200,15%,8%)',
        'dark-gray': 'hsl(0,0%,52%)',
        'very-light-gray': 'hsl(0,0%,98%)',
        'white': 'hsl(0,0%,100%)',
      },
    },
  },
  variants: {},
  plugins: [],
  darkMode: "class"
};
export default config;
