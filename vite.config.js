import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: [
      "@tailwindcss/oxide",
      "@tailwindcss/oxide-win32-x64-msvc",
      "lightningcss",
    ],
  },
});
