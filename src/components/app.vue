<template>
  <div id="app">
    <page-header></page-header>
    <page-content></page-content>
    <page-footer></page-footer>
  </div>
</template>

<script>
import pageHeader from 'components/page-header.vue'
import pageFooter from 'components/page-footer.vue'
import pageContent from 'components/page-content.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    console.log('created 123');
  },
  components: {
    pageHeader,
    pageFooter,
    pageContent
  }
}
</script>

<style lang="scss">

</style>
