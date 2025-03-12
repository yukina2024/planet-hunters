import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy";

export default defineConfig({
  base: "/dist/", // ✅ 本番環境のためにベースURLを /dist/ に設定
  plugins: [
    react(),
    copy({
      targets: [
        { src: "src/audio/**/*", dest: "dist/assets/audio" },
        { src: "src/video/**/*", dest: "dist/assets/video" },
        { src: "src/img/**/*", dest: "dist/assets/img" }, // 画像をコピー
        { src: "src/css/**/*", dest: "dist/assets/css" }, // CSSをコピー
        { src: "src/js/**/*", dest: "dist/assets/js" }, // JSをコピー
      ],
      hook: "writeBundle",
    }),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: "./src/js/script.js", // ✅ script.js をエントリポイントに設定
      },
      output: {
        entryFileNames: "assets/js/[name].js", // ✅ JSのファイル名を統一
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return "assets/css/[name][extname]";
          }
          if (assetInfo.name?.endsWith(".js")) {
            return "assets/js/[name][extname]";
          }
          return "assets/img/[name][extname]";
        },
      },
    },
  },
});
