import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Static SPA build — deploys to Vercel Hobby as a zero-server site.
export default defineConfig({
  plugins: [react()],
  base: '/',
  // Inline empty PostCSS config so this project never inherits the
  // parent folder's postcss/tailwind config (differs on Vercel).
  css: {
    postcss: { plugins: [] },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
