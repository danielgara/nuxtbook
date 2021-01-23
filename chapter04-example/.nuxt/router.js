import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _582d0f60 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _03a38bb3 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _5590aa98 = () => interopDefault(import('..\\pages\\work\\index.vue' /* webpackChunkName: "pages/work/index" */))
const _9ffa6074 = () => interopDefault(import('..\\pages\\work-nested.vue' /* webpackChunkName: "pages/work-nested" */))
const _178159fc = () => interopDefault(import('..\\pages\\work-nested\\index.vue' /* webpackChunkName: "pages/work-nested/index" */))
const _15cab8b4 = () => interopDefault(import('..\\pages\\work-nested\\_slug.vue' /* webpackChunkName: "pages/work-nested/[_]slug" */))
const _58fded28 = () => interopDefault(import('..\\pages\\work\\_slug.vue' /* webpackChunkName: "pages/work/[_]slug" */))
const _77e4ea25 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _582d0f60,
    name: "about"
  }, {
    path: "/contact",
    component: _03a38bb3,
    name: "contact"
  }, {
    path: "/work",
    component: _5590aa98,
    name: "work"
  }, {
    path: "/work-nested",
    component: _9ffa6074,
    children: [{
      path: "",
      component: _178159fc,
      name: "work-nested"
    }, {
      path: ":slug",
      component: _15cab8b4,
      name: "work-nested-slug"
    }]
  }, {
    path: "/work/:slug",
    component: _58fded28,
    name: "work-slug"
  }, {
    path: "/",
    component: _77e4ea25,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
