import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  base: './', 
  build: {
    outDir: 'dist', 
    rollupOptions: {
      input: './index.html',
    },
    minify: true, 
  },
});
