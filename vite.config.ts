import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { config } from './src/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: config.port,
    host: true, // Listen on all local IPs
  },
});