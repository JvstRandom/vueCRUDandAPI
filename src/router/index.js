import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlayerView from '../views/Player/View.vue'
import PlayerAdd from '../views/Player/Add.vue'
import PlayerEdit from '../views/Player/Edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/player',
      name: 'player',
      component: PlayerView
    },
    {
      path: '/player/add',
      name: 'playerAdd',
      component: PlayerAdd
    },
    {
      path: '/player/edit/:id',
      name: 'playerEdit',
      component: PlayerEdit
    },
  ]
})

export default router
