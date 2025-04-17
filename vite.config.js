import { defineConfig } from "vite";
import * as sass from "sass-embedded";

export default defineConfig({
  build: {
    outDir: "./dist",
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        silenceDeprecations: [
          "import",
          "mixed-decls",
          "color-functions",
          "global-builtin",
          "legacy-js-api",
        ],
        importers: [new sass.NodePackageImporter()],
      },
    },
  },
});
