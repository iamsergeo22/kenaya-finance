import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _50f3ef1b = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _339d2ea4 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _2e0e103f = () => interopDefault(import('../pages/team.vue' /* webpackChunkName: "pages/team" */))
const _3f48c528 = () => interopDefault(import('../pages/transaction.vue' /* webpackChunkName: "pages/transaction" */))
const _0011e648 = () => interopDefault(import('../pages/posts/_slug.vue' /* webpackChunkName: "pages/posts/_slug" */))
const _70abc9e0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _50f3ef1b,
    name: "about"
  }, {
    path: "/contact",
    component: _339d2ea4,
    name: "contact"
  }, {
    path: "/team",
    component: _2e0e103f,
    name: "team"
  }, {
    path: "/transaction",
    component: _3f48c528,
    name: "transaction"
  }, {
    path: "/posts/:slug?",
    component: _0011e648,
    name: "posts-slug"
  }, {
    path: "/",
    component: _70abc9e0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
