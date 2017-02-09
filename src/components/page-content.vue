<template>
  <div id="content">
    <img src="~assets/img/sub/logo.png" />
    <div class="bg"></div>
    <h1>{{ message }}</h1>
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

    .bg{
      margin: 0 auto;
      width: 200px;
      height: 200px;
      background: transparent url(~assets/img/sub/logo.png) no-repeat center center;
    }

    a {
      color: #42b983;
    }
  }

</style>