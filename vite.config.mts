import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  build: {
    assetsInlineLimit: 0,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'kaplay',
              test: /node_modules\/kaplay/,
            },
          ],
        },
      },
    },
  },

  plugins: [createHtmlPlugin()],
})
