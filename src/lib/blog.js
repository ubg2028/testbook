import { getCollection } from 'astro:content';
import authors from '../data/authors.json';

export { authors };
export const authorMap = Object.fromEntries(authors.map(a => [a.slug, a]));

// Published posts, newest first. Set `draft: true` in a post to hide it.
export async function getPosts() {
  const all = await getCollection('blog', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const fmtDate = d => d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export const isoDate = d => d.toISOString().slice(0, 10);
