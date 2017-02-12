<template>
  <div id="content">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'page-content',
    data () {
      return {
        message: 'Welcome to Your Vue.js App'
      }
    },
    created () {
      console.log(this.message);
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>