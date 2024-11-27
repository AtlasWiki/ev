import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [viteSingleFile()],
  root: './',
  base: './',
  build: {
    outDir: 'bundled-inline', // Output directory for bundled files
    rollupOptions: {
      input: './index.html',
    },
    minify: true,
  },
});
