<template>
  <div class="header">
  <router-link to="/">Go to Main</router-link>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </div>
</template>

<script>
  export default {
    name: 'page-header',
    data () {
      return {
        message: 'header created'
      }
    },
    created () {
      console.log(this.message);
    }
  }
</script>

<style lang="scss">
  .header{
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
    text-align: center;
  }
</style>