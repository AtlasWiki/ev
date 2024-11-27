import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // Ensure Vite looks for your files in the root folder of the project
  base: './', // Ensures that Vite looks for assets relative to the root
  build: {
    outDir: 'dist', // Folder where the bundled files will be output
    rollupOptions: {
      input: './index.html', // Correct path to the index.html as the entry point
    },
    minify: false, // Disable minification to simplify debugging
    sourcemap: true, // Enable source maps for easier debugging
  },
  server: {
    open: true, // Automatically open the app in the browser after the server starts
  },
});
