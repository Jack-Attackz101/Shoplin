import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
        serif: ["var(--font-fraunces)"],
      },
      colors: {
        coral: "#FF5C3E",
        orange: "#FF8C42",
        warm: "#FAF6EF",
        cream: "#FFF8F0",
        dark: "#1A1208",
        text: "#2C1A0E",
        yellow: "#FFE566",
        muted: "#9B8A7A",
      },
      borderRadius: {
        DEFAULT: "20px",
        lg: "28px",
      },
    },
  },
  plugins: [],
};
export default config;
