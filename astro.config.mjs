// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  // Use static site generation instead of server-side rendering
  output: 'static',
  
  site: 'https://jeffscotti.net',
  
  build: {
    // Always inline small stylesheets to improve LCP
    inlineStylesheets: 'always',
  },
  
  outDir: './dist',
  
  server: {
    port: 4321,
    host: true,
  },
});
