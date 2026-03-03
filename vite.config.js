import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ['www.vantara-internationalconference.com', 'vantara-internationalconference.com'],
  },
  preview: {
    host: true,
    allowedHosts: ['www.vantara-internationalconference.com', 'vantara-internationalconference.com'],
  },
})
