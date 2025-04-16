import { defineConfig } from "vite";
import * as sass from "sass-embedded";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        silenceDeprecations: ["import", "color-functions", "global-builtin"],
        importers: [new sass.NodePackageImporter()],
      },
    },
  },
});
