<template>
  <div class="inner video">
    <div class="row">
      <div class="small-6 medium-4 large-4 columns" v-for="video in youtubeList">
        <a  :data-video-id="video" 
            :href="'https://youtu.be/' + video" target="_blank"
            @click="openModal">
          <img alt="" :src="'http://img.youtube.com/vi/' + video + '/mqdefault.jpg'">
        </a>
      </div>
      <modal-layer modal-id="video" :key="'video'">
        <div v-show="currentVideo === video" :video-id="video" v-for="(video, index) in youtubeList" :key="index">
          <div class="insertPoint"></div>
        </div>
      </modal-layer>
    </div>
  </div>
</template>

<script>
import modalLayer from 'root/components/modal-layer.vue';
import youtube from 'root/components/youtube';
export default {
  name: 'video',
  data () {
    return {
      initedVideos: {},
      currentVideo: '',
      youtubeList:  [
      'NICuQWTwGzY', 'wvv5pSmR9js', '5lpjGYn1ZiQ', 'X0IqiCkKgZU', '4trrt0mNYII', '6BNHjraWWaU', 'IXwr8llcvbI', 'K79YLgI5nEU', 'GgGKv9fnKAE', 'Q-_EuyJhQas', 'GA7fRb_MeaU'
      ]
    }
  },
  methods: {
    afterClose (e) {
      //console.log('custom callback after layer closed', e);
      Object.keys(this.initedVideos).forEach((video) =>{
        //console.log(this.initedVideos[video]);
        this.initedVideos[video].pauseVideo();
      })
    },
    openModal (e) {
      e.preventDefault();
      this.currentVideo = e.target.nodeName === 'A' ? e.target.getAttribute('data-video-id') : e.target.parentElement.getAttribute('data-video-id');

      youtube.loadApi.then(() => {
        youtube.initVideo(this.currentVideo, this.initedVideos);
      });

      this.eb.$emit('modal-open', {modalId: 'video', afterClose: this.afterClose})
    }
  },
  mounted () {
    this.eb.$on('modal-close-after', this.afterClose);
  },
  destroyed () {
    this.eb.$off('modal-close-after');
  },
  components: {
    modalLayer
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