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

const blogEN = defineCollection({
	// Load Markdown and MDX files in the `src/content/en/blog/` directory.
	loader: glob({ base: './src/content/en/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object(blogSchema)
});

const blogDE = defineCollection({
	// Load Markdown and MDX files in the `src/content/de/blog/` directory.
	loader: glob({ base: './src/content/de/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object(blogSchema)
});

export const collections = { blogEN, blogDE };
