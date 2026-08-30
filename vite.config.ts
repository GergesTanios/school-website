import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { reactClickToComponent } from 'vite-plugin-react-click-to-component'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    reactClickToComponent(),
  ],
})