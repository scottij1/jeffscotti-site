// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";

export default defineConfig({
  // Enable server-side rendering for API routes
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
});
