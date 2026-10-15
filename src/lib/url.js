// Prefix every internal link with the configured base path (needed on GitHub Pages project sites).
export const u = (p = '/') => {
  const b = import.meta.env.BASE_URL.replace(/\/$/, '');
  return b + (p.startsWith('/') ? p : '/' + p);
};
