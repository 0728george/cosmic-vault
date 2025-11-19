import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          900: "#000000",
          800: "#0d0d1f",
          700: "#1a0033",
          accent: "#00f0ff",
          teal: "#00ffc3",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "cosmic-gradient": "radial-gradient(circle at 50% 50%, #1a0033 0%, #000000 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
