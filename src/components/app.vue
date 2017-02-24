<template>
  <div id="app">
    <page-navigation @route-change="routeChange"></page-navigation>
    <page-header></page-header>
    <page-content :sub-title="subTitle"></page-content>
    <page-contact></page-contact>
    <page-audio></page-audio>
  </div>
</template>

<script>
import pageNavigation from 'root/components/page-navigation.vue';
import pageHeader from 'root/components/page-header.vue';
import pageContact from 'root/components/page-contact.vue';
import pageContent from 'root/components/page-content.vue';
import pageAudio from 'root/components/page-audio.vue';

export default {
  name: 'app',
  data () {
    return {
      subTitle: ''
    }
  },
  methods: {
    routeChange (e) {
      this.subTitle = e.data.linkName;
    }
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
@import '~root/components/scss/_variables';
@import '~root/components/scss/_foundation';
@import '~root/components/scss/_common';

#app {
  overflow: hidden;
}
</style>
