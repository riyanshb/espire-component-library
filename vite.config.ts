import { defineConfig } from 'vite';
import VitePresetReact from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [ VitePresetReact()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
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
