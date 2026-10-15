import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE and BASE are set by the GitHub Actions workflow.
// Custom domain? Set SITE=https://yourdomain.com and BASE=/
const base = (process.env.BASE || '/').replace(/\/$/, '');

// Lets you write blog links as /exams/ssc-cgl/ in markdown; the BASE path is added automatically.
function rehypeBaseLinks() {
  return tree => {
    const walk = n => {
      const h = n.type === 'element' && n.tagName === 'a' && n.properties && n.properties.href;
      if (base && typeof h === 'string' && h.startsWith('/') && !h.startsWith('//') && !h.startsWith(base + '/')) n.properties.href = base + h;
      if (n.children) n.children.forEach(walk);
    };
    walk(tree);
  };
}

export default defineConfig({
  site: process.env.SITE || 'http://localhost:4321',
  base: process.env.BASE || '/',
  trailingSlash: 'always',
  compressHTML: true,
  build: { inlineStylesheets: 'always' },
  markdown: { rehypePlugins: [rehypeBaseLinks] },
  integrations: [sitemap()],
});
