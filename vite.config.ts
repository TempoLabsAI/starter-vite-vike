import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import vike from 'vike/plugin'

const conditionalPlugins: [string, Record<string, any>][] = [];

// @ts-ignore
if (process.env.TEMPO) {
  conditionalPlugins.push(["tempo-devtools/swc", {}]);
}

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    entries: [
      "src/main.tsx", 
      "src/tempobook/**/*"
    ],
  },
  plugins: [
    react({
      plugins: conditionalPlugins,
    }),
    vike(),
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
