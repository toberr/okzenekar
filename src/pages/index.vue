<template>
  <div>Index</div>
</template>

<script>
export default {
  name: 'index',
  created () {
  	console.log('index page created');
  	this.eb.$emit('test', {
        message: 'index triggered'
      });
      window.pagevent = this.eb;
  }
}
</script>

<style lang="scss">

</style>
