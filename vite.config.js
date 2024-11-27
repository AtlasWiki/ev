import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // Ensure Vite looks for your files in the root folder of the project
  base: './', // Ensures that Vite looks for assets relative to the root
  build: {
    outDir: 'dist', // Folder where the bundled files will be output
    rollupOptions: {
      input: './index.html', // Correct path to the index.html as the entry point
    },
    minify: true, // Disable minification to simplify debugging
     // Enable source maps for easier debugging
  },
});
