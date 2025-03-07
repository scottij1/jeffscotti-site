// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  // Use static site generation instead of server-side rendering
  output: 'static',
  
  // Optional: Add other configuration options as needed
  site: 'https://jeffscotti.net',
  
  // Build options
  build: {
    // Always inline small stylesheets to improve LCP
    inlineStylesheets: 'always',
  },
  
  // Set the directory where your site will be built
  // The default is './dist'
  outDir: './dist',
  
  // Optional: Configure the server during development
  server: {
    port: 4321,
    host: true,
  },
});
