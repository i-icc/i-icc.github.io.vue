<template>
  <HeaderTemplate />
  <router-view/>
</template>

<script>
 import HeaderTemplate from './components/modules/HeaderTemplate.vue'

export default {
  name: 'App',
  components: {
    HeaderTemplate
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
  /* margin-top: 60px; */
}
</style>