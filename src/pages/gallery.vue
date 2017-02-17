<template>
  <div class="inner gallery">
    <div class="frame">
      <template v-for="(item,index) in galleryImages">
        <a 
          :data-index="index" 
          :href="'/src/assets/img/gallery/' + item.pic"
          @click.prevent="openModal">
          <img alt="" :src="'/src/assets/img/gallery/thumb/' + item.thumb" />
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
    <modal-layer modal-id="picture">
      <img alt="" :src="galleryPicture" />
    </modal-layer>
  </div>
</template>

<script>
import galleryImages from '../generated/gallery-images.json';
import modalLayer from 'root/components/modal-layer.vue';
export default {
  name: 'gallery',
  data () {
    return {
      galleryImages,
      galleryPicture: ''
    }
  },
  methods: {
    openModal (e) {
      console.log(e);
      this.galleryPicture = e.target.parentElement.href;
      this.eb.$emit('modal-open', {modalId: 'picture'})
    }
  },
  created () {
    //console.log('galleryImages', galleryImages);
  },
  components: {
    modalLayer
  },
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