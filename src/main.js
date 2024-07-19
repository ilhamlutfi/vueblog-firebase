import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// jquery
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

// fontawesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// import assets template
import '@/assets/css/styles.css'
import '@/assets/js/scripts.js'

createApp(App).use(router).mount('#app')
