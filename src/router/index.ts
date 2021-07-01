import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import Layout from '../components/Layout/index.vue';

export const constRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      hidden: true,
    },
  },
  {
    path: '/index',
    name: 'Home',
    component: Home,
    meta: {
      hidden: true,
    },
  },
  {
    path: '/demo',
    component: Layout,
    meta: {
      title: 'demo',
    },
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          title: 'about',
        },
      },
    ],
  },
];

export const dynamicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/accessControl',
    meta: {
      title: '权限管理',
    },
    component: Layout,
    children: [
      {
        path: '/userInfo',
        name: 'userInfo',
        component: () => import(/* webpackChunkName: "userInfo" */ '../views/accessControl/UserInfo.vue'),
        meta: {
          title: '账号管理',
        },
      },
    ],
  },
];

const finalroutes = dynamicRoutes.concat(constRoutes);

const router = createRouter({
  history: createWebHashHistory(),
  routes: finalroutes,
});

export default router;
