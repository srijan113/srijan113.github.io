import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // '/' for https://<user>.github.io or a custom domain; '/<repo>/' for a project page.
  // The GitHub Pages workflow sets BASE_PATH for you.
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
  css: {
    modules: {
      // Deterministic class names, so the pre-rendered HTML (SSR build)
      // and the browser bundle always agree.
      generateScopedName: '[name]__[local]__[hash:base64:5]',
    },
  },
});
