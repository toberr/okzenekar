<template>
  <div class="inner">
    <div class="row">
      <div class="small-12 medium-6 large-6 columns">
        <p>Örökzöld, retro, mulatós élőben, és igény szerint laptopról a legmodernebb zenék is.<br>
        <br>
        Minden a Ti kívánságotok szerint! Teljes mértékben ránk is bízhatjátok, de közösen is összeállíthatjuk az est zenei anyagát, hogy a nagyszülőktől a barátokig, mindenki a legjobban érezhesse magát.<br>
        <br>
        Ha felkeltettük érdeklődéseteket, keressetek telefonon és <a href="mailto:okzenekar@gmail.com">emailen</a>.</p>
      </div>
      <div class="small-12 medium-6 large-6 columns">
        <div class="slider">
          <img alt="" class="active" src="~root/assets/img/cycle/gallery_52.jpg"> 
          <img alt="" src="~root/assets/img/cycle/gallery_49.jpg"> 
          <img alt="" src="~root/assets/img/cycle/gallery_00.jpg"> 
          <img alt="" src="~root/assets/img/cycle/gallery_02.jpg"> 
          <img alt="" src="~root/assets/img/cycle/gallery_37.jpg"> 
          <img alt="" src="~root/assets/img/cycle/gallery_18.jpg"> 
          <img alt="" src="~root/assets/img/cycle/gallery_39.jpg"> 
          <img alt="" src="~root/assets/img/cycle/gallery_01.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: ['title'],
  created () {
  	console.log('index page created');
  	this.eb.$emit('test', {
      message: 'index triggered'
    });
  }
}
</script>

<style lang="scss">
</style>
