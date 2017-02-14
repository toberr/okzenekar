<template>
  <div class="inner gallery">
    <div class="frame">
      <template v-for="(item,index) in galleryImages">
        <a :data-index="index" :href="'/src/assets/img/gallery/' + item.pic">
          <img alt="" :src="'/src/assets/img/gallery/thumb/' + item.thumb">
        </a> 
      </template>
    </div>
    <!-- modal layer start -->
    <div class="layerContent" data-layer-content="picture">
      <button class="prev">prev</button>
      <button class="next">next</button>
      <button class="close"></button>
      <div class="content"><img alt="" src=""></div>
    </div><!-- modal layer end -->
  </div>
</template>

<script>
import galleryImages from '../generated/gallery-images.json';
export default {
  name: 'gallery',
  data () {
    return {
      galleryImages: galleryImages
    }
  },
  created () {
    console.log('galleryImages', galleryImages);
  }
}
</script>

<style lang="scss">
@import '~root/components/scss/_variables';
.gallery {
  h2 {
    margin: 0 10px 20px;
  }
  .inner {
    padding: 0 5px;
  }
  .frame {
    font-size: 0;
    line-height: 0;
    padding: 0 5px;
  }
  a {
    position: relative;
    display: inline-block;
    width: 33.33%;
    img {
      display: block;
      width: 100%;
      height: auto;
      border: 5px solid $gray;
    }
  }

  @media #{$tablet} {
    a {
      width: 20%;
    }
  }

  @media #{$desktop} {
    a {
      width: 14.28%;
      img {
        &:hover {
          border-color: $blue;
        }
      }
    }
  }
}
</style>