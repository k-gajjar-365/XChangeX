import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import dotenv from "dotenv";  

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  define:
  {
    "VITE_API": JSON.stringify(process.env.VITE_API) 
  },
  base: process.env.VITE_BASE_PATH || "/XChangeX"
})
