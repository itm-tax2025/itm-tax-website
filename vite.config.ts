import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/itmtax.com/',
	server: {
		host: true,
		port: 8080,
	},
});
