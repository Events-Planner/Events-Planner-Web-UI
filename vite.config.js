import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  // Load ALL environment variables from .env file
  const env = loadEnv(mode, process.cwd(), '')

  // Dynamically map every key to process.env
  const processEnvDefines = {}
  Object.keys(env).forEach((key) => {
    processEnvDefines[`process.env.${key}`] = JSON.stringify(env[key])
    processEnvDefines[`process.env.${key.toLowerCase()}`] = JSON.stringify(env[key])
  })

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    base: env.VITE_BASE_PATH || '/',
    define: processEnvDefines,
  }
})