import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	assetsInclude: ['**/*.xml'], 
	plugins: [react()],
	base: '/',
	server: {
		host: true,
		port: 8080,
	},
});
