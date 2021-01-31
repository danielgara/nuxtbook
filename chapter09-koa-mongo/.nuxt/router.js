import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _324a0a30 = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages_users_index" */))
const _51de9e15 = () => interopDefault(import('..\\pages\\users-query.vue' /* webpackChunkName: "pages_users-query" */))
const _d64b542a = () => interopDefault(import('..\\pages\\users\\add\\index.vue' /* webpackChunkName: "pages_users_add_index" */))
const _58f92ef6 = () => interopDefault(import('..\\pages\\users\\delete\\_id.vue' /* webpackChunkName: "pages_users_delete__id" */))
const _268351b2 = () => interopDefault(import('..\\pages\\users\\update\\_id.vue' /* webpackChunkName: "pages_users_update__id" */))
const _c98ad160 = () => interopDefault(import('..\\pages\\users\\_id.vue' /* webpackChunkName: "pages_users__id" */))
const _b39973b8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    path: "/users",
    component: _324a0a30,
    name: "users"
  }, {
    path: "/users-query",
    component: _51de9e15,
    name: "users-query"
  }, {
    path: "/users/add",
    component: _d64b542a,
    name: "users-add"
  }, {
    path: "/users/delete/:id?",
    component: _58f92ef6,
    name: "users-delete-id"
  }, {
    path: "/users/update/:id?",
    component: _268351b2,
    name: "users-update-id"
  }, {
    path: "/users/:id",
    component: _c98ad160,
    name: "users-id"
  }, {
    path: "/",
    component: _b39973b8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
