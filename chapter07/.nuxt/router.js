import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9d41e174 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _4f55abce = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages_contact" */))
const _bcf0b3cc = () => interopDefault(import('..\\pages\\work\\index.vue' /* webpackChunkName: "pages_work_index" */))
const _7c52cb2c = () => interopDefault(import('..\\pages\\work-nested.vue' /* webpackChunkName: "pages_work-nested" */))
const _61ee4054 = () => interopDefault(import('..\\pages\\work-nested\\index.vue' /* webpackChunkName: "pages_work-nested_index" */))
const _655b82e4 = () => interopDefault(import('..\\pages\\work-nested\\_slug.vue' /* webpackChunkName: "pages_work-nested__slug" */))
const _c05df65c = () => interopDefault(import('..\\pages\\work\\_slug.vue' /* webpackChunkName: "pages_work__slug" */))
const _5dd22bea = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _9d41e174,
    name: "about"
  }, {
    path: "/contact",
    component: _4f55abce,
    name: "contact"
  }, {
    path: "/work",
    component: _bcf0b3cc,
    name: "work"
  }, {
    path: "/work-nested",
    component: _7c52cb2c,
    children: [{
      path: "",
      component: _61ee4054,
      name: "work-nested"
    }, {
      path: ":slug",
      component: _655b82e4,
      name: "work-nested-slug"
    }]
  }, {
    path: "/work/:slug",
    component: _c05df65c,
    name: "work-slug"
  }, {
    path: "/",
    component: _5dd22bea,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
