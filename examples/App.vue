<template>
  <div id="app">
    <img alt="Vue logo" src="./logo.png" />
    <h1>Welcome to My Vue.js UI By WebPack!</h1>
    <Jsx />
  </div>
</template>

<script>
import Jsx from './Jsx.vue'
export default {
  name: 'App',
  components: { Jsx },
  mounted() {
    console.log('hello')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
