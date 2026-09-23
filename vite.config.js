import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    // Keep CRA's output directory so existing hosting settings still point at the right folder
    outDir: 'build'
  }
})
