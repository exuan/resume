import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import packageJson from './package.json'
import importCss from 'vite-plugin-import-css'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts(), react(), importCss()],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'cjs' ? 'js' : 'mjs'}`,
    },
    emptyOutDir: false,
    rollupOptions: {
      external: Object.keys(packageJson.dependencies),
    },
  },
})
