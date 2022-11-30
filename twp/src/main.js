import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import './style.css'

const app = createApp(App)

app.config.globalProperties.$path = 'http://localhost:8888/www/wordpress/wp-json/wp/v2';
// app.config.globalProperties.$path = 'http://localhost/wordpress/wordpress/wp-json/wp/v2';
// app.config.globalProperties.$path = 'http://localhost/wordpress/wp-json/wp/v2';

app.use(createPinia())
app.use(router)

app.component('Datepicker', Datepicker);

app.mount('#app')
