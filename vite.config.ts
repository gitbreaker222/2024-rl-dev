import { defineConfig } from 'vitest/config';
import { defaultTheme  } from '@sveltepress/theme-default' 
import { sveltepress  } from '@sveltepress/vite' 

export default defineConfig({
	plugins: [sveltepress({
		theme : defaultTheme()
	})],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
