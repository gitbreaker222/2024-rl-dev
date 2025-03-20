import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blogSchema = {
	title: z.string(),
	description: z.string(),
	// Transform string to Date object
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
	heroImage: z.string().optional(),
}

const defineBlogCollection = (locale = 'en') => {
	return defineCollection({
		// Load Markdown and MDX files in the `src/content/en/blog/` directory.
		loader: glob({ base: `./src/content/${locale}/blog`, pattern: '**/*.{md,mdx}' }),
		// Type-check frontmatter using a schema
		schema: z.object(blogSchema)
	});
}

const blogEN = defineBlogCollection('en')
const blogDE = defineBlogCollection('de')

export const collections = { blogEN, blogDE };
