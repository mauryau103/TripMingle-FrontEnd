import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 2002, // Set the port you want here
  },
  resolve: {
    alias: {
      assets: path.resolve("./src/assets"),
    },
  },
  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: "assets/images/[name][extname]",
      },
    },
  },
});
