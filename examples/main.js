import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MeUI from '../src/index'
import hljs from 'highlight.js'
import DemoBlock from './components/DemoBlock.vue'
import MainHeader from './components/Header'
import SideNav from './components/SideNav'

import 'highlight.js/styles/github.css'
// import 'highlight.js/styles/darcula.css'
import './assets/styles/common.css'

Vue.component('DemoBlock', DemoBlock)
Vue.component('MainHeader', MainHeader)
Vue.component('SideNav', SideNav)

router.afterEach(() => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
  document.title = 'me-ui'
})

Vue.config.productionTip = false

Vue.use(MeUI)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
