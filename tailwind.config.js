/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00FFF5", // カスタムカラーを追加
      },
      height: {
        "1lh": "1lh", // 1行の高さ (line-height に依存)
      },
      fontFamily: {
        exo: ["Exo", "sans-serif"],
        noto: ["Noto Sans JP", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scrollDown: {
          "0%": { top: "0px", opacity: "1" },
          "80%": { top: "50px", opacity: "0.5" },
          "100%": { top: "50px", opacity: "0.3" },
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
        scrollDown: "scrollDown 2s ease-in-out infinite",
      },
      backgroundImage: {
        "bg-line-bottom-color": "url('/assets/img/bg-line-bottom-color.svg')",
        "bg-line-top-black": "url('/assets/img/bg-line-top-black.svg')",
        "bg-line-top-color": "url('/assets/img/bg-line-top-color.svg')",
      },
      screens: {
        xs: "500px", // 🔥 500px以下の時に適用
      },
    },
  },
  plugins: [],
};
