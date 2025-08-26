import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"), // ✅ fix process reference
  },
  resolve: {
    alias: {
      // ✅ Swap React imports to Preact
      react: "preact/compat",
      "react-dom": "preact/compat",
    },
  },
  build: {
    lib: {
      entry: "./src/MyReactWidget.element.tsx",
      name: "ReactWidget",
      fileName: "react-widget",
      formats: ["iife"],
    },
    rollupOptions: {
      // external: ["react", "react-dom"], // keep react out, use CDN
      // output: {
      //   globals: {
      //     react: "React", // maps import "react" → window.React
      //     "react-dom": "ReactDOM", // maps import "react-dom" → window.ReactDOM
      //   },
      // },
    },
  },
});
