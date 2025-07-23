// codepunk/vite.config.mjs
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, '.\scrimba-advanced_react-course\solo-projects\component library\badges'),
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'],
  }
});
