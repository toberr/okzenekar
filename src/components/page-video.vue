<template>
  <div id="video">
    <div class="inner" v-if="$route.path === '/'">
      <div class="row">
        <div class="columns small-12 medium-6 desktop-6">
          <div class="video-wrapper">
            <iframe src="https://www.youtube.com/embed/P8WpvZMx_g0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div>
        <div class="columns small-12 medium-6 desktop-6">
          <div class="video-wrapper">
            <iframe src="https://www.youtube.com/embed/OGToB4gsifk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>Alája, Kocziány Antal/dobok/30 5318353

<script>
  export default {
    name: 'page-video'
  }
</script>

<style lang="scss">
@import '~root/components/scss/_variables';
@import '~root/components/scss/_mixins';

#video {
  margin-bottom: 10px;
}

.video-wrapper {
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	height: 0;
  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>