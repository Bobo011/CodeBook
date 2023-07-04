import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';// Corrected import statement



// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Check if the current mode is production
  const isProduction = mode === 'production';

  return {
    resolve: {
      alias: {
        '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      },
    },
    plugins: [react()],
    define: {
      'process.env': {},
    },
    build: {
      minify: isProduction,
      sourcemap: !isProduction,
    },
  };
});
