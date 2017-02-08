<template>
  <div class="header">
    {{message}}
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