import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A2540",
          50: "#E8EDF3",
          100: "#C5D1DF",
          200: "#94A8BF",
          300: "#5F7894",
          400: "#33506F",
          500: "#0A2540",
          600: "#082035",
          700: "#061827",
          800: "#04111B",
          900: "#020910",
        },
        // Brand gold (DINConnect logosundaki altın)
        gold: {
          DEFAULT: "#D4A24C",
          50: "#FBF6EC",
          100: "#F6EBCF",
          200: "#EDD699",
          300: "#E3BF66",
          400: "#D4A24C",
          500: "#B58835",
          600: "#8C6727",
          700: "#63491B",
          800: "#3B2C10",
          900: "#1A1307",
        },
        // Legacy amber alias (eski sayfalar çalışsın diye) — gold'a map'liyoruz
        amber: {
          DEFAULT: "#D4A24C",
          50: "#FBF6EC",
          100: "#F6EBCF",
          200: "#EDD699",
          300: "#E3BF66",
          400: "#D4A24C",
          500: "#B58835",
          600: "#8C6727",
          700: "#63491B",
          800: "#3B2C10",
          900: "#1A1307",
        },
        anthracite: "#1F2937",
        offwhite: "#F5F5F7",
      },
      fontFamily: {
        display: ['"Manrope"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
