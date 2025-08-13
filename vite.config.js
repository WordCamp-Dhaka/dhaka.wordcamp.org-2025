import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  root: 'src',
  plugins: [viteSingleFile()],
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: './src/styles.scss',
      output: {
        assetFileNames: 'styles.css'
      }
    }
  }
});