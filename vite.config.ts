import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/itm-tax-website',
	server: {
		host: true,
		port: 8080,
	},
});
