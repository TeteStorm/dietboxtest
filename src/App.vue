<template>
  <div id="app" class="container">
    <top-bar></top-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue'

export default {
  name: 'app',
  components:{ TopBar },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #69c600;
  margin-top: 60px;
}
</style>
