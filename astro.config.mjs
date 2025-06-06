// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';




// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    mdx(),
    // tailwindcss()
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://luismiguel.montoya.dev', // Update with actual domain
  outDir: './dist',
  build: {
    assets: 'assets'
  }
});
