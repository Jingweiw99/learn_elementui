import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: (resolve) => require(['./components/HelloWorld.vue'], resolve)
  }
]

routes.push({
  path: '/loading',
  name: 'loading',
  component: (resolve) => require(['./docs/loading.md'], resolve)
})

routes.push({
  path: '/jsx',
  name: 'jsx',
  component: (resolve) => require(['./components/Jsx.vue'], resolve)
  // component: () => import('./components/JSX.vue'),
})

export default new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
})
