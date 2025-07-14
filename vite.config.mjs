// codepunk/vite.config.mjs
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'src/assembly-endgame'),
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'], // 👈 avoids duplicate instances
  }
});
