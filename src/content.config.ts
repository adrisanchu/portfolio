import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		stack: z.array(z.string()),
		tags: z.array(z.string()),
		featured: z.boolean().default(false),
		confidential: z.boolean().default(true),
		year: z.number(),
	}),
});

const experience = defineCollection({
	loader: glob({ base: './src/content/experience', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		company: z.string(),
		role: z.string(),
		start: z.string(),
		end: z.string(),
		location: z.string(),
		tags: z.array(z.string()),
		featured: z.boolean().default(false),
		order: z.number(),
	}),
});

const education = defineCollection({
	loader: glob({ base: './src/content/education', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		institution: z.string(),
		degree: z.string(),
		period: z.string(),
		location: z.string(),
		details: z.string().optional(),
		order: z.number(),
	}),
});

export const collections = { projects, experience, education };
