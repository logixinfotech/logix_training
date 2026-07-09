/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          50: "#F5F6F8",
          100: "#EEF0F3",
          0: "#FFFFFF",
        },
        ink: {
          900: "#12151C",
          800: "#191D26",
          700: "#232836",
          600: "#545B6B",
          400: "#8A90A0",
          200: "#C7CBD4",
        },
        line: {
          200: "#E4E7EC",
          300: "#D8DCE3",
        },
        brass: {
          300: "#E3C692",
          400: "#D1A25E",
          500: "#B8863B",
          600: "#96692B",
        },
        teal: {
          100: "#E3F1EF",
          500: "#1F6F6B",
          600: "#175653",
        },
        coral: {
          100: "#FBEAEA",
          500: "#C85C5C",
        },
        amber: {
          100: "#FBF1DA",
          500: "#C9932F",
        },
      },
      fontFamily: {
        display: ["'Newsreader'", "serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(18, 21, 28, 0.04), 0 8px 24px -12px rgba(18, 21, 28, 0.10)",
        card: "0 1px 1px rgba(18, 21, 28, 0.03), 0 12px 32px -16px rgba(18, 21, 28, 0.14)",
        raised: "0 20px 48px -20px rgba(18, 21, 28, 0.28)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(6px, -8px)" },
        },
        driftSlow: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-8px, 6px)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: 0.35, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.15)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        expandDown: {
          "0%": { opacity: 0, maxHeight: "0px" },
          "100%": { opacity: 1, maxHeight: "480px" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        ping1: {
          "0%": { transform: "scale(1)", opacity: 0.7 },
          "80%, 100%": { transform: "scale(1.9)", opacity: 0 },
        },
      },
      animation: {
        drift: "drift 7s ease-in-out infinite",
        driftSlow: "driftSlow 9s ease-in-out infinite",
        pulseDot: "pulseDot 2.4s ease-in-out infinite",
        fadeUp: "fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both",
        expandDown: "expandDown 0.35s cubic-bezier(0.16, 1, 0.3, 1) both",
        shimmer: "shimmer 1.8s linear infinite",
        ping1: "ping1 1.8s cubic-bezier(0.16, 1, 0.3, 1) infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
