<template>
  <div class="footer">
    {{message}}
  </div>
</template>

<script>
  export default {
    name: 'page-footer',
    data () {
      return {
        message: 'footer created'
      }
    },
    created () {
      console.log(this.message);
    }
  }
</script>

<style lang="scss">
  .footer{
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #000;
    text-align: center;
  }
</style>