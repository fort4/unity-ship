import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // 루트 기준으로 경로 처리
  plugins: [react()],
})
