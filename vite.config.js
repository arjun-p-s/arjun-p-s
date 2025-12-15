import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative base path ONLY for production build (GitHub Pages)
  // Local dev server needs default '/' to serve node_modules correctly
  base: process.env.NODE_ENV === 'production' ? './' : '/',
})
