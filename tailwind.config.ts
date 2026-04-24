import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F766E",
        secondary: "#155E75",
        accent: "#F59E0B",
        muted: "#E2E8F0",
        background: "#F8FAFC",
        foreground: "#0F172A"
      }
    }
  },
  plugins: []
};

export default config;
