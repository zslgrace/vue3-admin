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
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElColorPicker,
} from 'element-plus';
import 'element-plus/packages/theme-chalk/src/base.scss';
import lang from 'element-plus/lib/locale/lang/zh-cn';
import 'dayjs/locale/zh-cn';
import locale from 'element-plus/lib/locale';
import App from './App.vue';
import router from './router';
import store from './store';
import './style/base.css';
import './style/element-variables.scss';

locale.use(lang);

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
  .use(ElBreadcrumb)
  .use(ElBreadcrumbItem)
  .use(ElTable)
  .use(ElTableColumn)
  .use(ElPagination)
  .use(ElColorPicker)
  .mount('#app');
