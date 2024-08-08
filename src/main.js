import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import '../tailwindcss.css';
import App from './App.vue';
import router from './router/router.js';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);
Object.keys(ElementPlusIconsVue).forEach(key => {
	app.component(key, ElementPlusIconsVue[key]);
});

const pinia = createPinia();
app.use(router);
app.use(pinia);
app.use(ElementPlus);
app.mount('#app');
