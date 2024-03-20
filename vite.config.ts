import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import VitePresetReact from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), VitePresetReact()],
  build: {
    minify: false,
    outDir: 'dist', 
    lib: {
      entry: './src/index.ts', 
      formats: ['es', 'cjs'],
      name: 'Appbar', 
      fileName: () => 'Appbar.js' 
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
});
