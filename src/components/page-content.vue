<template>
  <div id="content">
    <img src="~assets/img/logo.png" />
    <h1>{{ message }}</h1>
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
  #content {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    h1 {
      color: #42b983;
      font-weight: normal;
    }
  }

  a {
    color: #42b983;
  }
</style>