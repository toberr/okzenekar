<template>
  <div class="img-cycle">
    <transition name="fade">
      <img :src="images[innerIndex]" alt="" :key="innerIndex">
    </transition>
  </div>
</template>

<script>

export default {
  name: 'img-cycle',
  props: ['images', 'index', 'loop'],
  data () {
    return {
      innerIndex: 0,
    }
  },
  computed: {
    imagesLength () {
      return this.images.length
    }
  },
  methods: {
    loopImages () {
      //console.log('innerIndex', this.innerIndex);
      this.innerIndex = this.innerIndex < this.imagesLength - 1 
      ? this.innerIndex + 1 
      : 0;
    }
  },
  watch: {
    index (x) {
      this.innerIndex = x;
    },
    innerIndex (x) {
      this.$emit('index', this.index)
    }
  },
  created () {
    if (typeof this.loop === 'string'){
      setInterval(this.loopImages, 5000);
    }
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
.img-cycle{
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
