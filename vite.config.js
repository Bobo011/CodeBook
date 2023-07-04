import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import 'dotenv/config'; // Corrected import statement

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  plugins: [react()],
  env: {
    REACT_APP_HOST: process.env.REACT_APP_HOST,
  },
});
