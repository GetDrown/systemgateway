import { createRouter, createWebHistory } from 'vue-router'
/* import HomeView from '../views/HomeView.vue' */
import MainView from '@/views/main-view.vue'
import loginpages from '@/components/login-page/login.vue'
import createAccount from '@/components/account-creation/create-account.vue'
import systemPages from '@/components/system-pages/system-pages.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/login',
    name: '/login',
    component: loginpages
  },
  {
    path: '/createAccount',
    name: '/createAccount',
    component: createAccount
  },
  {
    path: '/sysPages',
    name: '/sysPages',
    component: systemPages
  },
  /* {
    path: '',
    name: '',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: 
  } */
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
