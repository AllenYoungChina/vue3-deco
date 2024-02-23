import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // 将 `@` 符号映射到 `/src` 目录
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [vue()],
})
