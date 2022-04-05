import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
// import VueSplide from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import 'tw-elements/dist/js/index.min.js'

import App from './App.vue'
import { router } from './router'
import './assets/base.css'

const app = createApp(App)
    // app.use(VueSplide)
    app.use(router)
    app.use(createPinia())
    app.mount('#app')
axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1/'