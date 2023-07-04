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
      'process.env.VITE_REACT_APP_HOST': JSON.stringify(process.env.REACT_APP_HOST),
    },
    build: {
      minify: isProduction,
      sourcemap: !isProduction,
    },
  };
});
