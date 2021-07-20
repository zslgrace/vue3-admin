import Layout from '../components/Layout/index.vue';

const routes = [
  {
    path: '/canvas',
    name: 'canvas',
    component: Layout,
    meta: {
      title: 'canvas demos',
    },
    children: [
      {
        path: '/paint',
        name: 'Paint',
        component: () => import(/* webpackChunkName: "paint" */ '../views/canvasDemo/Paint.vue'),
        meta: {
          title: 'paint',
        },
      },
    ],
  },
];

export default routes;
