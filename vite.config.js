import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined, // Single bundle for speed
      },
    },
  },
  preview: {
    port: 4173,
  },
  css: {
    postcss: './postcss.config.js',
  },
})
