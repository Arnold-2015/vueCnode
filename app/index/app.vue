<template>
  <div id="app">
    <img src="../assets/loading.gif" >
    
    <!-- <router-view></router-view> -->
    <Arnold></Arnold>
    <Alltopic></Alltopic>
  </div>
</template>

<script>
import Arnold from '../components/Arnold.vue'
import Alltopic from '../components/Alltopic.vue'
export default {
  name: 'app',
  components: {
    Arnold,Alltopic
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