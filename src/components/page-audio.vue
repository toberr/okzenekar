<template>
  <footer>
    <div id="audio">
      <div class="inner">
        <div class="row">
          <div class="control">
            <button class="prev"><span>prev</span></button>
            <button class="play-pause">
              <span class="play">play</span>
              <span class="pause">pause</span>
            </button>
            <button class="next"><span>next</span></button>
            <div class="time">
              <div class="line">
                <div class="pointer"></div>
                <div class="current"></div>
              </div><span class="now">00:00</span> <span class="decor">/</span> <span class="total">00:00</span>
            </div>
            <div class="volume">
              <span class="speaker"><svg height="400pt" id="speaker" version="1" viewbox="0 0 75 75" width="400pt">
              <g id="g1">
                <polygon id="polygon1" points="39,14 22,29 6,29 6,48 22,48 39,63 39,14" style="stroke:#111111;stroke-width:5;stroke-linejoin:round;fill:#111111;"></polygon>
                <path d="M 48,49 C 50,46 51,42 51,38 C 51,34 50,31 48,28" id="path1" style="fill:none;stroke:#111111;stroke-width:5;stroke-linecap:round"></path>
                <path d="M 55,21 C 59,26 61,32 61,38 C 61,45 59,51 55,56" id="path2" style="fill:none;stroke:#111111;stroke-width:5;stroke-linecap:round"></path>
                <path d="M 62,63 C 67,56 70,48 70,38 C 70,29 67,21 62,14" id="path1" style="fill:none;stroke:#111111;stroke-width:5;stroke-linecap:round"></path>
              </g></svg></span>
              <div class="line">
                <div class="pointer"></div>
                <div class="current"></div>
              </div>
            </div>
          </div>
          <div class="tabContainer list">
            <div class="tabLinks">
              <button class="tab{?counter===0; active;}">${data.db.obj.categoryNames[counter++]}</button>
            </div>
            <div class="tabContent{?counter===0; active;}">
              <a class="song{?loop.getIndex()===4 && counter === 0; active;}" href="assets/mp3/${song.mp3}">${song.name}</a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'page-audio'
  }
</script>

<style lang="scss">
#audio{
  border-bottom: 1px solid black;
  margin-bottom: 20px;
  padding-bottom: 20px;
}
</style>