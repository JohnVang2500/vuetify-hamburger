import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/hamburger',
      component: () => import('@/pages/HamburgerPage.vue'),
      name: 'hamburger',
    },
    {
      path: '/chicken',
      component: () => import('@/pages/ChickenPage.vue'),
      name: 'chicken',
    },
  ]
});
export default router;