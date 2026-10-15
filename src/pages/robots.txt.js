import { u } from '../lib/url.js';
export const GET = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL(u('/sitemap-index.xml'), site).href}\n`, { headers: { 'Content-Type': 'text/plain' } });
