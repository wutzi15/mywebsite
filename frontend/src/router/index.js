import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue'),
  },
  {
    path: '/SingleEntry/:slug',
    name: 'SingleEntry',
    component: () => import('../views/SingleEntry.vue'),
    props: true
  },
  {
    path: '/SingleImage/:id',
    name: 'SingleImage',
    component: () => import('../views/SingleImage.vue')
  },
  {
    path: '/fotos',
    name: 'Fotos',
    component: () => import('../views/Fotos.vue'),
  },
  {
    path: '/datenschutz',
    name: 'Datenschutz',
    component: () => import('../views/Datenschutz.vue'),
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: () => import('../views/Impressum.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
