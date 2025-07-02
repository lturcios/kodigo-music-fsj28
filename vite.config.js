import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
     babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true, // Agrega el nombre del componente a las clases para facilitar el debug
              fileName: false    // No agrega el nombre del archivo, para clases más limpias
            }
          ]
        ]
      }
  })],
})
