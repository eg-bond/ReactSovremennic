/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import removeConsole from 'vite-plugin-remove-console'
import { qrcode } from 'vite-plugin-qrcode'
import liveReload from 'vite-plugin-live-reload'
import svgr from 'vite-plugin-svgr'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    removeConsole(),
    qrcode(),
    liveReload('public/Images/**/*.webp'),
    // createHtmlPlugin({
    //   inject: {
    //     injectTo: 'head',
    //     data: {

    //     }
    //   },
    // }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
    coverage: {
      reporter: ['html'],
    },
  },
  server: {
    open: true,
  },
})
