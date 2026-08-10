// vite.config.js
import { defineConfig } from "file:///C:/Users/eg-bo/Documents/Programming/ReactSovremennic/node_modules/vite/dist/node/index.js";
import svgr from "file:///C:/Users/eg-bo/Documents/Programming/ReactSovremennic/node_modules/vite-plugin-svgr/dist/index.js";
import react from "file:///C:/Users/eg-bo/Documents/Programming/ReactSovremennic/node_modules/@vitejs/plugin-react/dist/index.js";
import { qrcode } from "file:///C:/Users/eg-bo/Documents/Programming/ReactSovremennic/node_modules/vite-plugin-qrcode/dist/index.js";
import liveReload from "file:///C:/Users/eg-bo/Documents/Programming/ReactSovremennic/node_modules/vite-plugin-live-reload/dist/index.js";
import removeConsole from "file:///C:/Users/eg-bo/Documents/Programming/ReactSovremennic/node_modules/vite-plugin-remove-console/dist/index.mjs";
import { vanillaExtractPlugin } from "file:///C:/Users/eg-bo/Documents/Programming/ReactSovremennic/node_modules/@vanilla-extract/vite-plugin/dist/vanilla-extract-vite-plugin.cjs.js";
var vite_config_default = defineConfig({
  plugins: [
    vanillaExtractPlugin(),
    react(),
    svgr(),
    removeConsole(),
    qrcode(),
    liveReload("public/Images/**/*.webp")
  ],
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  build: {
    rollupOptions: {
      input: process.env.VITE_BUILD_MAIN_ONLY === "true" ? { main: "./index.html" } : {
        main: "./index.html",
        scheduleGenerator: "./gen.html"
      }
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    css: true,
    coverage: {
      reporter: ["html"]
    }
  },
  preview: {
    port: 8090
  },
  server: {
    open: true,
    port: 8080
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxlZy1ib1xcXFxEb2N1bWVudHNcXFxcUHJvZ3JhbW1pbmdcXFxcUmVhY3RTb3ZyZW1lbm5pY1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcZWctYm9cXFxcRG9jdW1lbnRzXFxcXFByb2dyYW1taW5nXFxcXFJlYWN0U292cmVtZW5uaWNcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2VnLWJvL0RvY3VtZW50cy9Qcm9ncmFtbWluZy9SZWFjdFNvdnJlbWVubmljL3ZpdGUuY29uZmlnLmpzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGUvY2xpZW50XCIgLz5cclxuXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgc3ZnciBmcm9tICd2aXRlLXBsdWdpbi1zdmdyJztcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0IHsgcXJjb2RlIH0gZnJvbSAndml0ZS1wbHVnaW4tcXJjb2RlJztcclxuaW1wb3J0IGxpdmVSZWxvYWQgZnJvbSAndml0ZS1wbHVnaW4tbGl2ZS1yZWxvYWQnO1xyXG5pbXBvcnQgcmVtb3ZlQ29uc29sZSBmcm9tICd2aXRlLXBsdWdpbi1yZW1vdmUtY29uc29sZSc7XHJcbmltcG9ydCB7IHZhbmlsbGFFeHRyYWN0UGx1Z2luIH0gZnJvbSAnQHZhbmlsbGEtZXh0cmFjdC92aXRlLXBsdWdpbic7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZhbmlsbGFFeHRyYWN0UGx1Z2luKCksXHJcbiAgICByZWFjdCgpLFxyXG4gICAgc3ZncigpLFxyXG4gICAgcmVtb3ZlQ29uc29sZSgpLFxyXG4gICAgcXJjb2RlKCksXHJcbiAgICBsaXZlUmVsb2FkKCdwdWJsaWMvSW1hZ2VzLyoqLyoud2VicCcpLFxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiAnL3NyYycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgaW5wdXQ6IHByb2Nlc3MuZW52LlZJVEVfQlVJTERfTUFJTl9PTkxZID09PSAndHJ1ZSdcclxuICAgICAgICA/IHsgbWFpbjogJy4vaW5kZXguaHRtbCcgfVxyXG4gICAgICAgIDoge1xyXG4gICAgICAgICAgICBtYWluOiAnLi9pbmRleC5odG1sJyxcclxuICAgICAgICAgICAgc2NoZWR1bGVHZW5lcmF0b3I6ICcuL2dlbi5odG1sJyxcclxuICAgICAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGVzdDoge1xyXG4gICAgZ2xvYmFsczogdHJ1ZSxcclxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxyXG4gICAgc2V0dXBGaWxlczogJy4vc3JjL3Rlc3Qvc2V0dXAudHMnLFxyXG4gICAgY3NzOiB0cnVlLFxyXG4gICAgY292ZXJhZ2U6IHtcclxuICAgICAgcmVwb3J0ZXI6IFsnaHRtbCddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHByZXZpZXc6IHtcclxuICAgIHBvcnQ6IDgwOTAsXHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIG9wZW46IHRydWUsXHJcbiAgICBwb3J0OiA4MDgwLFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBR0EsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sV0FBVztBQUNsQixTQUFTLGNBQWM7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxtQkFBbUI7QUFDMUIsU0FBUyw0QkFBNEI7QUFHckMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AscUJBQXFCO0FBQUEsSUFDckIsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsY0FBYztBQUFBLElBQ2QsT0FBTztBQUFBLElBQ1AsV0FBVyx5QkFBeUI7QUFBQSxFQUN0QztBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSztBQUFBLElBQ1A7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixPQUFPLFFBQVEsSUFBSSx5QkFBeUIsU0FDeEMsRUFBRSxNQUFNLGVBQWUsSUFDdkI7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLG1CQUFtQjtBQUFBLE1BQ3JCO0FBQUEsSUFDTjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxJQUNiLFlBQVk7QUFBQSxJQUNaLEtBQUs7QUFBQSxJQUNMLFVBQVU7QUFBQSxNQUNSLFVBQVUsQ0FBQyxNQUFNO0FBQUEsSUFDbkI7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
