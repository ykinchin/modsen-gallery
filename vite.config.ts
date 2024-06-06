import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, './src/components'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@constants': path.resolve(__dirname, './src/constants'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@styles': path.resolve(__dirname, './src/styles')
		}
	}
})
