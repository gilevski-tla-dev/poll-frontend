import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    allowedHosts: ["7b47-194-87-58-32.ngrok-free.app"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/shared/styles/variables" as *;`,
      },
    },
  },
});
