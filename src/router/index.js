import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import bind from '../views/bind.vue'
import nav from '../views/nav.vue'
import test from '../views/test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/bind',
    name: 'bind',
    component: bind
  },
  {
    path: '/nav',
    name: 'nav',
    component: nav
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
