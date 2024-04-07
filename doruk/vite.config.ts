import { defineConfig } from 'vite'

import path from "path";

import react from '@vitejs/plugin-react-swc'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import viteCompression from "vite-plugin-compression";
import { createHtmlPlugin as html } from "vite-plugin-html";

import postCSSPresetMantine from "postcss-preset-mantine";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [postCSSPresetMantine]
    }
  },
  plugins: [
    react(),
    vanillaExtractPlugin(),
    html({ minify: true }),
    viteCompression({ algorithm: "gzip" }),
    viteCompression({ algorithm: "brotliCompress" }),
  ],
  server: {
    watch: { usePolling: true },
    host: true,
    port: 8080,
    strictPort: true,
  },
  resolve: {
    alias: {
      "#": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    reportCompressedSize: false,
  },
})
