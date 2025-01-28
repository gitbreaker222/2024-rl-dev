// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["de", "en"],
    defaultLocale: "en",
    fallback: {
      de: "en"
    },
  },
  integrations: [svelte()],
  adapter: netlify()
});