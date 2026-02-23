import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 1. Keep this for general Astro settings
  site: 'https://cyberalliance.in',
  
  integrations: [
    tailwind(),
    // 2. Pass the site URL directly into the integration
    sitemap({
      site: 'https://cyberalliance.in'
    }),
  ],
    // 3. Enable Markdown for blog posts.
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});