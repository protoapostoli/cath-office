import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
export default defineConfig({
   site: 'https://catholicoffice.com',
   output: 'hybrid',
   adapter: node({
     mode: 'standalone',
   }),
   server: {
    host: '0.0.0.0'
  },

  integrations: [tailwind(),  sitemap()]
});