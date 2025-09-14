/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // 可以直接用 expect/describe/it
    environment: "jsdom", // 模拟浏览器环境
    setupFiles: "./src/setupTests.js", // 自动加载 jest-dom matchers
  },
});
