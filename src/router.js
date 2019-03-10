import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/lazyLoadPage',
      name: 'lazy-load-page',
      component: () => import(/* webpackChunkName: "lazy-load-page" */ './views/lazy-load-page/lazy-load-page')
    },
    {
      path: '/cardPage',
      name: 'card-page',
      component: () => import(/* webpackChunkName: "card-page" */ './views/card-page/card-page.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import(/* webpackChunkName: "demo" */ './views/demo/demo.vue')
    }
  ]
})
