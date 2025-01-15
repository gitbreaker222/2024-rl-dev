import { defineConfig } from 'vitest/config';
import { sveltepress  } from '@sveltepress/vite' 

export default defineConfig({
	plugins: [sveltepress()],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
