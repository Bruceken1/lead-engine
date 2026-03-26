import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'   // Use this (more stable for most users)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
})