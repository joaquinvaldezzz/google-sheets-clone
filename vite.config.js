import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    open: true,
  },
  build: {
    outDir: './dist',
    rollupOptions: {
      input: { index: './index.html' },
    },
    emptyOutDir: true,
  },
});
