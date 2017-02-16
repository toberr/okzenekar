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
        <page-slider :images="galleryImages"></page-slider>
      </div>
    </div>
  </div>
</template>

<script>
import pageSlider from 'root/components/page-slider.vue';
export default {
  name: 'index',
  props: ['title'],
  data () {
    return  {
      galleryImages: [ 
        '52', '49', '00', '02', '37', '18', '39', '01' 
      ].map(x => `/src/assets/img/cycle/gallery_${x}.jpg`)
    }
  },
  created () {
  	console.log('index page created');
  	this.eb.$emit('test', {
      message: 'index triggered'
    });
  },
  components: {
    pageSlider
  }
}
</script>

<style lang="scss">
</style>
