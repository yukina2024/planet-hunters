import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets",
    rollupOptions: {
      output: {
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
