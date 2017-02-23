<template>
  <div id="app">
    <img src="../assets/loading.gif" height="300" width="400">
    
    <!-- <router-view></router-view> -->
    <Arnold></Arnold>
  </div>
</template>

<script>
import Arnold from '../components/Arnold.vue'
export default {
  name: 'app',
  components: {
    Arnold
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>