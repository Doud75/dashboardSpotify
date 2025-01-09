import { sveltekit } from '@sveltejs/kit/vite';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use '@/styles/variables' as *;`,
			},
		},
	},
	ssr: {
		noExternal: ['chart.js'],
	},
});
