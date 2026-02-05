import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Polyfill for structuredClone for older Node versions (e.g., Node 16)
if (typeof globalThis.structuredClone !== "function") {
  globalThis.structuredClone = (value) =>
    JSON.parse(JSON.stringify(value));
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: "/https://github.com/7amdyabuelkhair/hamdy-portofolio/",
    plugins: [react(), tailwindcss()],
    server: {
      open: true,
      host: false, // Allow access from network devices
      proxy: {
        "/api": {
          target: "http://localhost:5000",
          changeOrigin: true,
          secure: true,
        },
      },
    },
  };
});
