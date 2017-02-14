<template>
  <div id="app">
    <page-navigation></page-navigation>
    <page-header></page-header>
    <page-contact></page-contact>
    <page-content></page-content>
    <page-audio></page-audio>
  </div>
</template>

<script>
import pageNavigation from 'components/page-navigation.vue'
import pageHeader from 'components/page-header.vue'
import pageContact from 'components/page-contact.vue'
import pageContent from 'components/page-content.vue'
import pageAudio from 'components/page-audio.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    console.log('created 123');
    this.eb.$on('test', function (data) {
      console.log(data);
    })
    window.app = this;
  },
  components: {
    pageNavigation,
    pageHeader,
    pageContact,
    pageContent,
    pageAudio
  }
}
</script>

<style lang="scss">
</style>
