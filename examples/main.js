import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MeUI from '../src/index'

import hljs from 'highlight.js'
import DemoBlock from './components/DemoBlock.vue'
import SideNav from './components/side-nav'

// import 'highlight.js/styles/github.css'
import 'highlight.js/styles/darcula.css'
// import 'highlight.js/styles/arduino-light.css'
// import 'highlight.js/styles/stackoverflow-light.css'

Vue.component('DemoBlock', DemoBlock)
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
;[(1, 2, 3)].forEach((i) => {
  console.log(i)
})

Vue.use(MeUI)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
