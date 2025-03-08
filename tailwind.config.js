/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/js/**/*.js"],
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
    },
  },
  plugins: [],
};
