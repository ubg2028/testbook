import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every markdown file in src/content/blog becomes a post at /blog/<file-name>/
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.enum(['abhyas-team', 'niraj-singh', 'jay-verma']).default('abhyas-team'),
    reviewedBy: z.enum(['jay-verma']).optional(), // only set this when Jay really checked the post
    category: z.string().default('Preparation'),
    exam: z.string().optional(), // an exam slug from exams.json, e.g. ssc-cgl
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
