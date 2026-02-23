import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cyberalliance.in',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  // Enable markdown for blog posts
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
