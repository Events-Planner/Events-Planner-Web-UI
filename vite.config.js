import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    base: env.VITE_BASE_PATH || '/',
    define: {
      // Replaces process.env.admin_ui_url during Vite build
      'process.env.admin_ui_url': JSON.stringify(env.ADMIN_UI_URL || env.VITE_ADMIN_UI_URL || ''),
    },
  }
})