import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy";

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    copy({
      targets: [
        { src: "src/audio/**/*", dest: "dist/assets/audio" },
        { src: "src/video/**/*", dest: "dist/assets/video" },
        { src: "src/img/**/*", dest: "dist/assets/img" }, // 画像をコピー
        { src: "src/css/**/*", dest: "dist/assets/css" }, // CSSをコピー
        { src: "src/js/**/*", dest: "dist/assets/js" },
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
        script: "./src/js/script.js", // ✅ script.js をビルド対象に指定
      },
      output: {
        entryFileNames: "assets/js/script.js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "assets/css/[name][extname]";
          }
          if (assetInfo.name && assetInfo.name.endsWith(".js")) {
            return "assets/js/[name][extname]";
          }
          return "assets/img/[name][extname]";
        },
      },
    },
  },
});
