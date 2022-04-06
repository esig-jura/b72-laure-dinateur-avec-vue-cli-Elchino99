import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/PageAccueil',
    name: 'PageAccueil',
    component: () => import('../views/PageAccueil.vue'),
  },
  {
    path: '/PageInformations',
    name: 'PageInformations',
    component: () => import('../views/PageInformations.vue'),
  },
  {
    path: '/PageContact',
    name: 'PageContact',
    component: () => import('../views/PageContact.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
