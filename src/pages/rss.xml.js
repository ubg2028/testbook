import site from '../data/site.json';
import { getPosts, authorMap } from '../lib/blog.js';
import { u } from '../lib/url.js';

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function GET({ site: origin }) {
  const abs = p => new URL(u(p), origin).href;
  const posts = await getPosts();
  const items = posts.map(p => `<item><title>${esc(p.data.title)}</title><link>${abs(`/blog/${p.id}/`)}</link><guid>${abs(`/blog/${p.id}/`)}</guid><pubDate>${p.data.date.toUTCString()}</pubDate><author>${esc(authorMap[p.data.author].name)}</author><description>${esc(p.data.description)}</description></item>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${esc(site.name)} blog</title><link>${abs('/blog/')}</link><description>${esc(site.tagline)}</description><language>en</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
