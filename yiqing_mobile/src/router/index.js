import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/check',
    name: 'Check',
    component: () => import('@/views/Check/index'),
  },
  {
    path: '/riskarea',
    name: 'RiskArea',
    component: () => import('@/views/RiskArea/index'),
  },
  {
    path: '/goods',
    name: 'Goods',
    component: () => import('@/views/Goods/index'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
