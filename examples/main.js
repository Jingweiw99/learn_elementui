import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
;[(1, 2, 3)].forEach((i) => {
  console.log(i)
})

new Vue({
  render: (h) => h(App)
}).$mount('#app')
