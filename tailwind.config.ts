import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridRow: {
        "span-half": "span 0.5 / span 0.5",
      },
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
        // 全体的な背景色
        background: "hsl(var(--background))",

        // 全体的な文字色
        foreground: "hsl(var(--foreground))",

        // サブ的要素の背景色、文字色
        secondary: "hsl(var(--muted-secondary))",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        verySmall: "0.5rem",
        3: "3rem",
        2: "2rem",
        1: "1rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
