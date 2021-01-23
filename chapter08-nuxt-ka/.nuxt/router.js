import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0d685a0d = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages/users/index" */))
const _0f737360 = () => interopDefault(import('..\\pages\\users-query.vue' /* webpackChunkName: "pages/users-query" */))
const _09210896 = () => interopDefault(import('..\\pages\\users\\_id.vue' /* webpackChunkName: "pages/users/_id" */))
const _06bf12c2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/users",
    component: _0d685a0d,
    name: "users"
  }, {
    path: "/users-query",
    component: _0f737360,
    name: "users-query"
  }, {
    path: "/users/:id",
    component: _09210896,
    name: "users-id"
  }, {
    path: "/",
    component: _06bf12c2,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
