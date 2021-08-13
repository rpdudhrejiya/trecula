import { createApp } from 'vue'
import App from './App.vue'
import Equal from 'equal-vue'
import 'equal-vue/dist/style.css'
import SimpleVueValidation from 'simple-vue-validator';

const app = createApp(App)
app.use(Equal)
app.use(SimpleVueValidation);
app.mount('#app')
