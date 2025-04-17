import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import * as sass from 'sass-embedded'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    root: resolve(__dirname, 'src'),
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
                silenceDeprecations: [
                    'import',
                    'mixed-decls',
                    'color-functions',
                    'global-builtin',
                    'legacy-js-api',
                ],
                importers: [new sass.NodePackageImporter()],
            },
        },
    },
})
