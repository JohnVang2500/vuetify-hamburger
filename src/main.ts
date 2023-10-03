import { createApp } from 'vue'
import { createPinia } from 'pinia';
import router from './router'
import VueAwesomeSwiper from "vue-awesome-swiper"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {fas} from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import './index.css'

library.add(fas)

const app = createApp(App)
.component('fa', FontAwesomeIcon)
app.mount('#app')
app.use(createPinia())
app.use(router)
app.use(VueAwesomeSwiper)