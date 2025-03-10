const { defineConfig } = require("vite");
const fs = require("fs-extra");

module.exports = defineConfig({
  root: ".",
  base: "/",
  build: {
    outDir: "assets",
    emptyOutDir: true,
    assetsDir: "",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith(".css")) {
            return "css/[name][extname]"; // ✅ CSS → assets/css/
          }
          if (assetInfo.name.endsWith(".js")) {
            return "js/[name][extname]"; // ✅ JS → assets/js/
          }
          return "img/[name][extname]"; // ✅ 他のファイルはビルドしない
        },
      },
    },
  },
  plugins: [
    {
      name: "copy-static-files",
      closeBundle() {
        // ✅ 画像・動画・音声を `assets/` にコピー
        fs.copySync("src/img", "assets/img", { overwrite: true });
        fs.copySync("src/audio", "assets/audio", { overwrite: true });
      },
    },
  ],
});
