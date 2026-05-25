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
        bg: "#0a0a0f",
        card: "#13131f",
        "card-hover": "#1a1a2e",
        accent: "#6366f1",
        "accent-hover": "#818cf8",
        muted: "#94a3b8",
        border: "#1e1e30",
      },
    },
  },
  plugins: [],
};
export default config;
