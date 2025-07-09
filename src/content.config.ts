import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';

const contentLocalized = defineCollection({
	loader: glob({
		base: `./src/contentLocalized`,
		pattern: '**/*.{md,mdx}',
	})
})

const content = defineCollection({
	loader: glob({
		base: `./src/content`,
		pattern: '**/*.md',
	})
})

export const collections = { contentLocalized, content };
