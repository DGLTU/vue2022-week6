import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules/bootstrap/dist/js/bootstrap'
import '../node_modules/bootstrap/scss/bootstrap.scss'
import '@/scss/main.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
