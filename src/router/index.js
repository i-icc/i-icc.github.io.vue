import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InfoView from '../views/InfoView.vue'
// import BlogView from '../views/BlogView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/works',
    name: 'works',
    component: () => import(/* webpackChunkName: "works" */ '../views/WorksView.vue')
  },
  {
    path: '/work/:id',
    name: 'work',
    component: () => import(/* webpackChunkName: "work" */ '../views/WorkDetailView.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: InfoView
  },
  {
    path: '/blog',
    name: 'blog',
    beforeEnter() {
      window.location = "https://i-icc.hatenablog.com/"
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
