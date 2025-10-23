// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tinayan-design.github.io',
  base: '/portfolio/',
  vite: {
    plugins: [tailwindcss()]
  }
});