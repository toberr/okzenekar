<template>
  <div id="footer">
    {{message}}
    <div class="test">
      <img src="~assets/img/sub/logo.png" />
      <div class="bg"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page-footer',
    data () {
      return {
        message: 'footer'
      }
    },
    created () {
      console.log(this.message);
    }
  }
</script>

<style lang="scss">
  #footer{
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #000;
    text-align: center;

    .test{
      h1 {
        color: #42b983;
        font-weight: normal;
      }

      img, .bg {
        width: 100px;
        height: 100px;
        display: inline-block;
      }

      .bg{
        background: transparent url(~assets/img/sub/logo.png) no-repeat center center;
        background-size: cover;
      }
    }
  }


</style>