import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/Accueil',
    name: 'Accueil',
    component: () => import('../views/PageAccueil.vue'),
  },
  {
    path: '/Informations',
    name: 'Informations',
    component: () => import('../views/PageInformations.vue'),
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import('../views/PageContact.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
