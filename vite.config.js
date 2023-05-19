import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import removeConsole from 'vite-plugin-remove-console'
import { qrcode } from 'vite-plugin-qrcode'
import liveReload from 'vite-plugin-live-reload'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    removeConsole(),
    qrcode(),
    liveReload('public/Images/**/*.webp'),
  ],
  server: {
    open: true,
  },
})
