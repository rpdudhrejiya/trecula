import { createApp } from 'vue'
import App from './App.vue'
import Equal from 'equal-vue'
import 'equal-vue/dist/style.css'
import SimpleVueValidation from 'simple-vue-validator';
import './assets/css/bootstrap.min.css';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';
import L from 'leaflet';
import router from './router'
import store from './store'
const app = createApp(App)
app.use(router)
app.use(store)
app.use(Equal)
app.use(SimpleVueValidation);
app.use(VueTelInput);
app.use(L)
app.mount('#app')
