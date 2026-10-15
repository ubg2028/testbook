import site from '../data/site.json';

// Works once you put your AdSense publisher id (like ca-pub-1234567890123456) in src/data/site.json.
// Note: ads.txt must be served from the root of your domain, so use a custom domain with BASE=/.
export const GET = () => {
  const id = (site.adsense.client || '').replace(/^ca-/, '');
  const body = id ? `google.com, ${id}, DIRECT, f08c47fec0942fa0\n` : '# Add your AdSense publisher id in src/data/site.json to fill this file.\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
