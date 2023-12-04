import Loading from '../packages/loading/index'

// 导入组件库所有组件
const components = [Loading]

const install = function (Vue) {
  if (install.installed) return

  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

// 自动安装  判断是否用<script scr=''></script>的方式直接引入文件
if (typeof window.Vue !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  // 具体的组件列表
  Loading
}
