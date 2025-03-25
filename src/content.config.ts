import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';

const markdownPage = defineCollection({
	loader: glob({
		base: `./src/content`,
		pattern: '**/*.{md,mdx}',
	})
})

export const collections = { markdownPage };
