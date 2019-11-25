<template>
  <div id="app">
    <router-view/>
    <v-tab></v-tab>
  </div>
</template>

<script>
import Tab from '@/components/tab.vue'
export default {
  name: 'App',
  components: {
    'v-tab': Tab
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
