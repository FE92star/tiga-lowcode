import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  server: {
    open: true,
    port: 8083
  },

  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
  }
})
