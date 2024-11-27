import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        black: "#151515",
        white: "#FAF9F6",
        "rp3-blue": "#11368E",
        "rp3-yellow": "#FFDE21"
      },
      boxShadow: {
        "border-b": "0px 4px 0px",
      }
    },
  },
  plugins: [],
} satisfies Config;
