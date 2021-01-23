export { default as Copyright } from '../..\\components\\copyright.vue'
export { default as Logo } from '../..\\components\\logo.vue'

export const LazyCopyright = import('../..\\components\\copyright.vue' /* webpackChunkName: "components_copyright'}" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\logo.vue' /* webpackChunkName: "components_logo'}" */).then(c => c.default || c)
