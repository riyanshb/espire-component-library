import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import VitePresetReact from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), VitePresetReact()],
  build: {
    minify:false,
    
        outDir: 'dist', // Output directory
    lib: {
      entry: './src/index.ts', // Entry point for the library
      formats: ['es', 'cjs'],
      name: 'Appbar', // Name of the library (optional)
      fileName: () => 'Appbar.js' // Specify the output filename
    },
    rollupOptions: {
      external: /^react($|\/)/,
      output: {
          globals: {
              react: 'React'
          }
      }
  }
  }
})
