import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
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
