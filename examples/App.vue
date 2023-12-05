<template>
  <div id="app">
    <main-header></main-header>
    <div class="page-container">
      <side-nav :data="navsData"></side-nav>
      <div class="router-view"><router-view /></div>
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
  color: #2c3e50;

  .page-container {
    position: relative;
  }
  .router-view {
    padding-top: 80px;
    padding-left: 270px;
    padding-bottom: 100px;
    box-sizing: border-box;
  }
}
</style>
