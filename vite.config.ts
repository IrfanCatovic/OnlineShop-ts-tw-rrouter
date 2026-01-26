import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),
     tailwindcss()],
     server: {
    proxy: {
      // Svaki request koji počinje sa /api ide na fakestoreapi
      '/api': {
        target: 'https://fakestoreapi.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')  // uklanja /api prefiks
      }
    }
  }
})
