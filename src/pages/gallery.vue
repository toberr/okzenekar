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
    <modal-layer modal-id="picture">
      <img v-if="currentImage" :src="currentImage" alt="" />
      <button class="prev" @click="change('prev')">prev</button>
      <button class="next" @click="change('next')">next</button>
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
      currentImage: '',
      currentIndex: 0
    }
  },
  methods: {
    change (mode) {
      console.log(mode);
      if (mode === 'next'){
        var temp = this.galleryImages[this.currentIndex < this.galleryImages.length 
        ? this.currentIndex + 1
        : 0]
        this.currentIndex = this.currentIndex + 1;
        this.currentImage = '/src/assets/img/gallery/' + temp.pic;
      }
    },
    openModal (e) {
      //console.log(e);
      this.currentImage = e.target.parentElement.getAttribute('href');
      this.currentIndex = e.target.parentElement.getAttribute('data-index') * 1;
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
@import '~root/components/scss/_mixins';
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

div[modal-id="picture"]{
  .prev, .next {
    position: absolute;
    @include centerY();
    text-indent: -10000px;
    overflow: hidden;
    z-index: 2;
    width: 20px;
    height: 20px;
    &.prev {
      left: -20px;
      border-top: 5px solid $gray;
      border-left: 5px solid $gray;
      @include rotate(-45);
    }
    &.next {
      display: block;
      right: -20px;
      border-top: 5px solid $gray;
      border-right: 5px solid $gray;
      @include rotate(45);
    }
  }
}
</style>