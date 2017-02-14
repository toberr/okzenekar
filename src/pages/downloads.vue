<template>
  <div class="inner downloads">
    <div class="row">
      <template v-for="(collection, category, index) in data.songArray">
        <div class="small-12 medium-6 large-6 columns">
          <h3>{{data.categoryNames[index]}}</h3>
          <ul>
            <li v-for="song in collection">
              <a :href="'src/assets/mp3/' + song.mp3">{{song.name}}</a>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import data from 'root/data.json';
export default {
  name: 'about',
  data () {
    return {
      data: data
    }
  },
  created () {
    console.log(this.data);
  }
}
</script>

<style lang="scss">
@import '~root/components/scss/_variables';
.downloads {
  h3 {
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 10px;
    color: $gray;
    padding: 5px;
    background: $red;
    text-transform: uppercase;
  }
  ul {
    margin-bottom: 20px;
  }
  a {
    display: block;
    margin-bottom: 5px;
    padding: 5px;
    text-decoration: none;
    background: $brown;
    color: $gray;
  }
}
</style>