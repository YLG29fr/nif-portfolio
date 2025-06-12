import { createApp } from 'vue'

import './style.css'

import App from './App.vue'
import router from './router'

import i18next from './lib/i18n'
import I18NextVue from 'i18next-vue'

const app = createApp(App)
app.use(I18NextVue, { i18next })
app.use(router)
app.mount('#app')
