import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'index',
    component: (resolve) => require(['./components/HelloWorld.vue'], resolve)
    // component: () => import('./components/HelloWorld.vue')
  }
]

routes.push({
  path: '/loading',
  name: 'loading',
  component: (resolve) => require(['./docs/loading.md'], resolve)
})

export default new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
})
