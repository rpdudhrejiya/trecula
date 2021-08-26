import { createApp } from 'vue'
import App from './App.vue'
import Equal from 'equal-vue'
import 'equal-vue/dist/style.css'
import SimpleVueValidation from 'simple-vue-validator';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';
import L from 'leaflet';
import router from './router'
import store from './store'
import axios from 'axios';
const app = createApp(App)
axios.defaults.baseURL=process.env.VUE_APP_SERVER_URL
app.config.globalProperties.axios=axios
// const client = new axios({
// 	baseURL: process.env.BASEURL
// });
// app.provide('$axios', client);
app.use(router)
app.use(store)
app.use(Equal)
app.use(SimpleVueValidation);
app.use(VueTelInput);
app.use(L)
app.mount('#app')
