import { createApp } from 'vue';
import {
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElSwitch,
} from 'element-plus';
import 'element-plus/packages/theme-chalk/src/base.scss';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/style/base.css';

createApp(App)
  .use(store)
  .use(router)
  .use(ElMenu)
  .use(ElSubmenu)
  .use(ElMenuItem)
  .use(ElSwitch)
  .mount('#app');
