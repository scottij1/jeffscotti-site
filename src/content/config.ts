import { defineCollection, z } from 'astro:content';

// Define the schema for insights posts
const insightsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    category: z.enum(['case-study', 'tech', 'workflow', 'design']).default('tech'),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Jeff Scotti'),
    featured: z.boolean().default(false),
  }),
});

// Export the collections
export const collections = {
  'insights': insightsCollection,
};
