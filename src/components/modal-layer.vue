<template>
	<div class="modalLayer" :show="show">
   <div class="content">
     <slot></slot>
   </div>
   <div class="bg"></div>
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
      console.log('openEvent');
      this.show = true;
    },
    closeEvent (e) {
      console.log('closeEvent');
      this.show = false;
    },
    removeListeners () {
       this.eb.$off('modal-open');
       this.eb.$off('modal-close');
    },
    addListeners () {
      this.eb.$on('modal-open', e => {
        if (e.modalId === this.modalId){
          console.log('open modal with', this.modalId);
        }
      });

      this.eb.$on('modal-close', e => {
        if (e.modalId === this.modalId){
          console.log('hide modal with', this.modalId);
        }
      });
    }
  },
  created () {
    this.addListeners();
  },
  mounted () {
    console.log('mounted');
    console.log(this.modalId);
    
    this.$root.$el.appendChild(this.$el);
  },
  destroyed () {
    this.removeListeners();
    this.$el.parentNode.removeChild(this.$el);
  }
}
</script>

<style lang="scss">
.article {
  strong {
    display: inline-block;
    margin-bottom: 5px;
  }
  img {
    vertical-align: top;
    max-width: 200px;
    margin-bottom: 5px;
    &.left {
      float: left;
      margin-right: 10px;
    }
    &.right {
      float: right;
      margin-left: 10px;
    }
  }
}
</style>