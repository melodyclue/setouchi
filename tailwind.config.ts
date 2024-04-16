import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", "Noto Sans JP", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        card: "0 3px 5px rgba(0,0,0,.05)",
        grid: "0px 4px 10px 0px rgba(0, 0, 0, 0.05);",
      },
      colors: {
        primary: "#6178F1",
        youtube: "#FF0000",
        twitter: "hsl(var(--bg-twitter))",
        instagram: "hsl(var(--bg-instagram))",
        discord: "#5865F2",
        github: "#181717",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: "hsl(var(--muted-secondary))",
      },
    },
  },
  plugins: [],
} satisfies Config;
