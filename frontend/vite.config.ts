import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@pages': resolve(__dirname, './src/pages'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@context': resolve(__dirname, './src/context'),
      '@utils': resolve(__dirname, './src/utils'),
      '@constants': resolve(__dirname, './src/constants'),
      '@mock': resolve(__dirname, './src/mock'),
      '@services': resolve(__dirname, './src/services'),
      '@layouts': resolve(__dirname, './src/layouts'),
      '@assets': resolve(__dirname, './src/assets'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    cssMinify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) return 'react-vendor';
            if (id.includes('framer-motion') || id.includes('lucide-react') || id.includes('react-icons')) return 'ui-vendor';
            if (id.includes('chart.js') || id.includes('react-chartjs-2')) return 'chart-vendor';
            if (id.includes('react-hook-form') || id.includes('zod')) return 'form-vendor';
            return 'vendor';
          }
        },
      },
    },
  },
})
