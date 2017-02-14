<template>
  <div class="letoltesek tab">
    <div class="inner">
      <h2>${data.title}</h2>
      <div class="row">
        <div class="small-12 medium-6 large-6 columns">
          <h3>${data.db.obj.categoryNames[counter++]}</h3>
          <ul>
            <li>
              <a href="assets/mp3/${song.mp3}">${song.name}</a>
            </li>
          </ul>
        </div>
      </div>
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