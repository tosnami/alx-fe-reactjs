import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // 👇 يسمح بكتابة JSX داخل ملفات .js
      babel: {
        plugins: [['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]]
      }
    })
  ]
});