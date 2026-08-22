import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Proje sayfası (username.github.io/repo) kullanılacaksa base'i '/repo-adi/' yap.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
