import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Page1',
    component: () => import('../views/Page1.vue')
  },
  {
    path: '/Page2',
    name: 'Page2',
    component: () => import('../views/Page2.vue')
  },
  {
    path: '/Page3',
    name: 'Page3',
    component: () => import('../views/Page3.vue')
  },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  routes
})

export default router
