/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
	plugins: [react()],
	test: {
		environment: 'jsdom',
		setupFiles: ['./src/setupTests.ts'],
		globals: true,
		coverage: {
			provider: 'istanbul',
		},
	},
});
