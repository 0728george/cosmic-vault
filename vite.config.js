import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: './index.html',  // Forces Vite to use root index.html
    // ... other options
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
