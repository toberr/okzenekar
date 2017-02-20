<template>
	<div class="modalLayer" :show="show" :modal-id="modalId">
   <div class="layerContent">
    <button class="close" @click="closeEvent"></button>
     <slot></slot>
   </div>
   <div class="bg" @click="closeEvent"></div>
  </div>
</template>

<script>
export default {
  name: 'modal-layer',
  props: ['modal-id'],
  data () {
    return {
      show: false
    }
  },
  methods: {
    openEvent (e) {
      //console.log('openEvent');
      this.show = true;
    },
    closeEvent (e) {
      //console.log('closeEvent');
      this.show = false;
    },
    removeListeners () {
       this.eb.$off('modal-open');
       this.eb.$off('modal-close');
    },
    addListeners () {
      this.eb.$on('modal-open', e => {
        if (e.modalId === this.modalId){
          //console.log('open modal with', this.modalId);
          this.openEvent();
        }
      });

      this.eb.$on('modal-close', e => {
        if (e.modalId === this.modalId){
          //console.log('hide modal with', this.modalId);
          this.closeEvent();
        }
      });
    }
  },
  mounted () {
    console.log('mounted');
    console.log(this.modalId);

    this.addListeners();
    this.$root.$el.appendChild(this.$el);
  },
  destroyed () {
    this.removeListeners();
    this.$el.parentNode.removeChild(this.$el);
  }
}
</script>

<style lang="scss">
@import '~root/components/scss/_variables';
@import '~root/components/scss/_mixins';

.modalLayer {
    position: relative;
    width: 0;
    height: 0;
    overflow: hidden;

    .bg{
      position: fixed;
      z-index: 1000;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      visibility: hidden;
      background: rgba(0, 0, 0, 0.8);
      opacity: 0;
      -ms-transition: opacity 0.3s, visibility 0.3s;
      -webkit-transition: opacity 0.3s, visibility 0.3s;
      transition: opacity 0.3s, visibility 0.3s;
    }

    .layerContent {
      position: fixed;
      left: 50%;
      top: 50%;
      z-index: 1001;
      background: #ffffff;
      opacity: 0;
      margin: 0;
      padding: 20px;
      visibility: hidden;
      -ms-transform: translate(-50%, -50%);
      /* IE 9 */
      -webkit-transform: translate(-50%, -50%);
      /* Safari */
      transform: translate(-50%, -50%) scale(0.5, 0.5);
      -ms-transition: opacity 0.3s, visibility 0.3s, -ms-transform 0.3s;
      -webkit-transition: opacity 0.3s, visibility 0.3s, -webkit-transform 0.3s;
      transition: opacity 0.3s, visibility 0.3s, transform 0.3s;

      filter: none;
      -webkit-filter: blur(0px);
      -moz-filter: blur(0px);
      -ms-filter: blur(0px);

      h2 {
        font-size: 30px;
        line-height: 1;
        margin-bottom: 25px;
      }

      p {
        margin-bottom: 25px;
      }

      img{
        max-width: none;
      }

      .close {
        position: absolute;
        top: -40px;
        right: 0px;
        width: 30px;
        height: 30px;
        &:before,
        &:after {
          content: '';
          position: absolute;
          height: 4px;
          width: 100%;
          top: 50%;
          left: 0;
          margin-top: -1px;
          background: $gray;
        }
        &:before {
          @include transform(rotate(45deg));
        }
        &:after {
          @include transform(rotate(-45deg));
        }
        &.hairline {
          &:before,
          &:after {
            height: 1px;
          }
        }
      }

      @media #{$mobile} {
        &{
          padding: 10px;
        }
    }

      @media #{$tablet} {
        &{
          width: auto;
        }
      }
    }

    &[show] {
      width: auto;
      height: auto;
      .bg{
        opacity: 1;
        visibility: visible;
      }

      .layerContent{
        opacity: 1;
        visibility: visible;
        transform: translate(-50%, -50%) scale(1, 1);
    }
  }
}
/* layer end*/

</style>