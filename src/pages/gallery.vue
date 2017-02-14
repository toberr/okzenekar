<template>
  <div class="galeria tab">
    <div class="inner">
      <h2>${data.title}</h2>
      <div class="frame">
        <a data-index="${index}" href="assets/img/gallery/${item.pic}"><img alt="" src="assets/img/gallery/thumb/${item.thumb}"></a> 
      </div><!-- modal layer start -->
      <div class="layerContent" data-layer-content="picture">
        <button class="prev">prev</button> <button class="next">next</button> <button class="close"></button>
        <div class="content"><img alt="" src=""></div>
      </div><!-- modal layer end -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
}
</script>

<style lang="scss">

</style>