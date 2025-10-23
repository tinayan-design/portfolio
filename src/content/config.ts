import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().optional(),
    projectUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    date: z.date(),
    order: z.number().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};
