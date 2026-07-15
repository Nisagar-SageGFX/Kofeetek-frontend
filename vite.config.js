import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  optimizeDeps: {
    include: [
      'react', 'react-dom', 'react-router-dom',
      'three', '@react-three/fiber', '@react-three/drei',
      'framer-motion',
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
          animation: ['framer-motion'],
        }
      }
    }
  }
})
