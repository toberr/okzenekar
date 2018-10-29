<template>
  <div class="inner index">
    <div class="row">
      <div class="small-12 medium-12 large-12 columns">
        <img-cycle 
          :images="galleryImages" 
          :index="0"
          loop ></img-cycle>
      </div>
    </div>
    <div class="row">
      <div class="small-12 medium-12 large-12 columns">
        <p>Örökzöld, retro, mulatós élőben, és igény szerint laptopról a legmodernebb zenék is.<br>
        <br>
        Minden a Ti kívánságotok szerint! Teljes mértékben ránk is bízhatjátok, de közösen is összeállíthatjuk az est zenei anyagát, hogy a nagyszülőktől a barátokig, mindenki a legjobban érezhesse magát.<br>
        <br>
        Mi, a zenekar tagjai gyermekkorunk óta zenélünk, tízen éves korunk óta játszunk tánczenét. Mind hárman igazi hangszeres zenészek vagyunk. Hangszereink: szintetizátor, harmonika,dob, szaxofon, klarinét. Hangszereink mellett énekhangunkkal is jól bánunk.
        <br>
        <br>
        Ha felkeltettük érdeklődéseteket, keressetek telefonon és <a href="mailto:okzenekar@gmail.com">emailen</a>.</p>
      </div>
    </div>
  </div>
</template>

<script>
import imgCycle from 'root/components/img-cycle.vue';
export default {
  name: 'index',
  props: ['title'],
  data () {
    return  {
      galleryImages: [ 
        0, 1, 2
      ].map(x => `/src/assets/img/cycle/p-${x}.jpg`)
    }
  },
  components: {
    imgCycle
  }
}
</script>

<style lang="scss">
  @import '~root/components/scss/_variables';
  @media #{$mobile} {
    .index p{
      margin-bottom: 10px;
    }
  }
</style>
