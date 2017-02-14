<template>
  <div id="content">
    <div class="inner">
      <h2>{{subTitle}}</h2>
    </div>
    <router-view :title="test"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'page-content',
    props: ['subTitle'],
    data () {
      return {
        message: 'Welcome to Your Vue.js App',
        test: 'test'
      }
    },
    created () {
      console.log(this.message);
    }
  }
</script>

<style lang="scss">

</style>