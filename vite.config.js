import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import sass terlebih dahulu
import sass from 'sass'


export default defineConfig({
  plugins: [react()],
  // gunakan seperti contoh berikut
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});