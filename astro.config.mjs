import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE and BASE are set by the GitHub Actions workflow.
// Custom domain? Set SITE=https://yourdomain.com and BASE=/
export default defineConfig({
  site: process.env.SITE || 'http://localhost:4321',
  base: process.env.BASE || '/',
  trailingSlash: 'always',
  compressHTML: true,
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap()],
});
