import { defineConfig } from "vite";
import path from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig({
  // Plugins configuration
  plugins: [
    // Generate TypeScript declaration files
    dts({
      insertTypesEntry: true,
      include: ["src/**/*"],
    }),
  ],

  // Resolve configuration
  resolve: {
    // Path aliases for cleaner imports
    alias: {
      "@jield/solodb-typescript-core": path.join(__dirname, "./src"),
    },
  },

  // Build configuration for library mode
  build: {
    // Output directory for the build
    outDir: "dist",
    // Library mode configuration
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "SoloDBReactComponents",
      formats: ["es", "cjs"],
      fileName: (format) => (format === "cjs" ? "index.cjs" : "index.js"),
    },
    // Rollup options
    rollupOptions: {
      // Externalize peer dependencies so they're not bundled
      // Note: also externalize the automatic JSX runtime to avoid resolving it during library build
      external: [
        "axios",
      ],
      output: {
        // Provide global variables for UMD build
        globals: {
          "axios": "axios"
        },
      },
    },
    // Generate source maps
    sourcemap: true,
    // Target modern browsers
    target: "es2020",
  },
});
