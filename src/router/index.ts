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
    path: '/demos',
    name: 'demos',
    component: Layout,
    meta: {
      title: 'demos',
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
      {
        path: '/nest1',
        name: 'Nest1',
        component: () => import(/* webpackChunkName: "nest1" */ '../views/demos/Nest1.vue'),
        meta: {
          title: 'nest1',
        },
        children: [
          {
            path: '/nest1-1',
            name: 'Nest1-1',
            component: () => import(/* webpackChunkName: "nest1-1" */ '../views/demos/Nest1-1.vue'),
            meta: {
              title: 'nest1-1',
            },
          }, {
            path: '/nest1-2',
            name: 'Nest1-2',
            component: () => import(/* webpackChunkName: "nest1-2" */ '../views/demos/Nest1-2.vue'),
            meta: {
              title: 'nest1-2',
            },
            children: [
              {
                path: '/nest1-2-1',
                name: 'Nest1-2-1',
                component: () => import(/* webpackChunkName: "nest1-2-1" */ '../views/demos/Nest1-2-1.vue'),
                meta: {
                  title: 'nest1-2-1',
                },
              }, {
                path: '/nest1-2-2',
                name: 'Nest1-2-2',
                component: () => import(/* webpackChunkName: "nest1-2-2" */ '../views/demos/Nest1-2-2.vue'),
                meta: {
                  title: 'nest1-2-2',
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

export const dynamicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/accessControl',
    name: 'accessControl',
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
      {
        path: '/roleInfo',
        name: 'roleInfo',
        component: () => import(/* webpackChunkName: "roleInfo" */ '../views/accessControl/RoleInfo.vue'),
        meta: {
          title: '角色管理',
        },
      },
      {
        path: '/menuInfo',
        name: 'menuInfo',
        component: () => import(/* webpackChunkName: "menunfo" */ '../views/accessControl/MenuInfo.vue'),
        meta: {
          title: '菜单管理',
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
