import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HomeTwo from '../views/HomeTwo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/HomeTwo',
    name: 'HomeTwo',
    component: HomeTwo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
