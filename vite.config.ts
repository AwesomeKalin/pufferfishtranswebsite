/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [enhancedImages(), sveltekit()]
});
