import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/auth/token": {
        target: "http://sungmin999.gonetis.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
