<template>
  <div class="page-slider">
    <transition name="fade">
      <img :src="images[index]" alt="" :key="index">
    </transition>
  </div>
</template>

<script>

export default {
  name: 'page-slider',
  props: ['images'],
  data () {
    return {
      index: 0
    }
  },
  computed: {
    imagesLength: function () {
      return this.images.length
    }
  },
  methods: {
    loop () {
      this.index = this.index < this.imagesLength - 1 
      ? this.index + 1 
      : 0;
    }
  },
  created () {
    setInterval(this.loop, 5000);
  }
}
</script>

<style lang="scss">
@import '~root/components/scss/_variables';
.fade-enter-active, .fade-leave-active {
  transition: opacity 5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
.page-slider{
  position: relative;
  padding-top: 232/350*100 + %;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
  }
}
</style>
