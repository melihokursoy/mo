import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@codecrib/demo": path.resolve(__dirname, "../../packages/demo/src"),
      // Do not alias `@codecrib/ui` here — allow package exports to resolve to `dist` so
      // `import '@codecrib/ui/styles.css'` picks up the prebuilt CSS in `packages/ui/dist`.
    },
  },
});
