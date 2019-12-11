<template>
  <div id="app">
    <keep-alive include="Home,Life,Notice">
      <router-view/>
    </keep-alive>
    <v-tab v-show="!$route.meta.fullScreen" />
  </div>
</template>

<script>
import Tab from '@/components/tab.vue'
export default {
  name: 'App',
  components: {
    'v-tab': Tab
  },
  data() {
    return {
      
    }
  },
  mounted() {
    
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
  width: 100%;
  height: 100%;
}
</style>
