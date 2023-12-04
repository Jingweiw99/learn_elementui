/* eslint-disable no-unused-vars */
import Loading from './src/main'

Loading.install = function (Vue, options) {
  Vue.component(Loading.name, Loading)
}
export default Loading
