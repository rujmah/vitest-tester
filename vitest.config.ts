/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.ts",
    testTimeout: 30000,
  },
  logLevel: "info",
  esbuild: {
    sourcemap: "both",
  },
  resolve: {
    alias: {
      "@vite-env-tester/core": "./services/core",
      "@vite-env-tester/web": "./web",
    },
  },
});