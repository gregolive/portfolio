/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Served from https://gregolive.github.io/portfolio/
  base: '/portfolio/',
  plugins: [react()],
  build: {
    // Keep CRA's output folder so the gh-pages deploy script is unchanged
    outDir: 'build',
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
    css: false,
  },
});
