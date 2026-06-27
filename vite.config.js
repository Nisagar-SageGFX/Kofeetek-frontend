import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      // Dev proxy: forwards /api calls to local backend during development
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      }
    },
  },
  optimizeDeps: {
    include: [
      'react', 'react-dom', 'react-router-dom',
      'three', '@react-three/fiber', '@react-three/drei',
      'framer-motion', 'gsap',
      '@supabase/supabase-js',
    ],
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          animation: ['framer-motion', 'gsap'],
        }
      }
    }
  }
})
