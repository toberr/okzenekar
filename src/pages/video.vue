<template>
  <div class="inner video">
    <div class="row">
      <div class="small-6 medium-4 large-4 columns" v-for="(video, index) in youtubeList">
        <a  :data-video-id="video" 
            :href="'https://youtu.be/' + video" target="_blank">
              <img alt="" :src="'http://img.youtube.com/vi/' + video + '/mqdefault.jpg'">
        </a>
        <div class="videoStorage dn" :data-video-id="video"></div>
      </div>
      <!-- modal layer start -->
      <div class="layerContent" data-layer-content="video">
        <button class="close"></button>
        <div class="content"></div>
      </div>
      <!-- modal layer end -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'video',
  data () {
    return {
      youtubeList:  [
      'NICuQWTwGzY', 'wvv5pSmR9js', '5lpjGYn1ZiQ', 'X0IqiCkKgZU', '4trrt0mNYII', '6BNHjraWWaU', 'IXwr8llcvbI', 'K79YLgI5nEU', 'GgGKv9fnKAE', 'Q-_EuyJhQas', 'GA7fRb_MeaU'
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~root/components/scss/_variables';
@import '~root/components/scss/_mixins';
.video {
  .row {
    margin-bottom: -15px;
  }
  .columns {
    float: left!important;
    a {
      position: relative;
      display: block;
      margin-bottom: 0.9375*2rem;
      img {
        width: 100%;
        height: auto;
      }
      &:after {
        content: '';
        display: block;
        position: absolute;
        @include center();
        width: 68px*0.8;
        height: 48px*0.8;
        background: transparent url(/src/assets/img/ico-youtube-small.png) no-repeat 0 0;
        background-size: cover;
      }
    }
  }
  @media #{$tablet} {
    .columns {
      a {
        &:after {
          width: 68px;
          height: 48px;
        }
      }
    }
  }
  @media #{$desktop} {
    .columns {
      a {
        &:hover {
          &:after {
            background-position: 0 100%;
          }
        }
      }
    }
  }
}
</style>