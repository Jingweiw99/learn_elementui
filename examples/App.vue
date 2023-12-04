<template>
  <div id="app">
    <div class="nav">
      <side-nav :data="navsData"></side-nav>
    </div>
    <div class="router-view">
      <router-view />
    </div>
  </div>
</template>

<script>
import navsData from './config/nav.config.json'
export default {
  name: 'App',
  data() {
    return {
      navsData
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  .nav {
    width: 222px;
  }
  .router-view {
    flex: 1;
  }
}
</style>
