import { createApp } from 'vue';
import {
  ElContainer,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElSwitch,
  ElInput,
  ElButton,
  ElForm,
  ElFormItem,
} from 'element-plus';
import 'element-plus/packages/theme-chalk/src/base.scss';
import App from './App.vue';
import router from './router';
import store from './store';
import './style/base.css';
import './style/reset.scss';

createApp(App)
  .use(store)
  .use(router)
  .use(ElContainer)
  .use(ElMenu)
  .use(ElSubmenu)
  .use(ElMenuItem)
  .use(ElSwitch)
  .use(ElInput)
  .use(ElButton)
  .use(ElForm)
  .use(ElFormItem)
  .mount('#app');
