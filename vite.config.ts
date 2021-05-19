import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import Components from 'vite-plugin-components'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ViteIcons(), Components({
    customComponentResolvers: ViteIconsResolver({componentPrefix: '',}),
  })],
  
})
