<template>
  <div class="video tab">
    <div class="inner">
      <div class="row">
        <div class="small-6 medium-4 large-4 columns">
          <a data-video-id="${video}" href="https://youtu.be/${video}" target="_blank"><img alt="" src="http://img.youtube.com/vi/${video}/mqdefault.jpg"></a>
          <div class="videoStorage dn" data-video-id="${video}"></div>
        </div><!-- modal layer start -->
        <div class="layerContent" data-layer-content="video">
          <!-- <button class="prev">prev</button>
                  <button class="next">next</button> -->
          <button class="close"></button>
          <div class="content"></div>
        </div><!-- modal layer end -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'video',
}
</script>

<style lang="scss">

</style>