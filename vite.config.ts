import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular'; // Plugin Angular para Vite

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    angular(), // Ativa o plugin Angular
  ],
  server: {
    port: 4200, // Porta padrão do Angular
    hmr: {
      timeout: 240000, // Aumenta o timeout para 120 segundos
    },
  },
  resolve: {
    alias: {
      // Define aliases para facilitar a importação de módulos
      '@': '/src',
    },
  },
});