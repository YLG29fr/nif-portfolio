import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {DEPLOY_CONFIG} from './src/deploy.config'

// https://vite.dev/config/
export default defineConfig({

  base: DEPLOY_CONFIG.base,
  
  plugins: [vue()],
})
