<template>
  <div id="audio">
    <div class="inner">
      <div class="row">
        <div class="control">
          <button class="prev" @click="prev"><span>prev</span></button>
          <button class="play-pause" :class="{playing: playing}">
            <span class="play" @click="playPause('play')">play</span>
            <span class="pause" @click="playPause('pause')">pause</span>
          </button>
          <button class="next" @click="next"><span>next</span></button>
          <div class="time">
            <div class="line" ref="positionContainer">
              <div class="pointer" ref="positionPointer"></div>
              <div class="current" ref="positionCurrent"></div>
            </div>
            <span class="now">{{now}}</span>
            <span class="decor">/</span>
            <span class="total">{{duration}}</span>
          </div>
          <div class="volume">
            <span class="speaker" @click="speaker">
              <svg xml:space="preserve"
                  version="1"
                  id="speaker"
                  width="400pt" height="400pt"
                  viewBox="0 0 75 75">
                  <g id="g1"><polygon id="polygon1"
                  points="39,14 22,29 6,29 6,48 22,48 39,63 39,14"
                  style="stroke:#111111;stroke-width:5;stroke-linejoin:round;fill:#111111;"
                  /><path id="path1"
                  d="M 48,49 C 50,46 51,42 51,38 C 51,34 50,31 48,28"
                  style="fill:none;stroke:#111111;stroke-width:5;stroke-linecap:round"/>
                  <path id="path2"
                  d="M 55,21 C 59,26 61,32 61,38 C 61,45 59,51 55,56"
                  style="fill:none;stroke:#111111;stroke-width:5;stroke-linecap:round"/>
                  <path id="path1"
                  d="M 62,63 C 67,56 70,48 70,38 C 70,29 67,21 62,14"
                  style="fill:none;stroke:#111111;stroke-width:5;stroke-linecap:round"/>
                  </g>
              </svg>
          </span>
            <div class="line" ref="volumeContainer">
              <div class="pointer" ref="volumePointer"></div>
              <div class="current" ref="volumeCurrent"></div>
            </div>
          </div>
        </div>
        <div class="tabContainer list">
          <div class="tabLinks" >
            <button 
              class="tab"
              :class="{active: activeTabIndex === i}"
              v-for="(category, i) in music.categoryNames"
              @click="changeTab(i)">
              {{category}}
            </button>
          </div>
          <div 
            class="tabContent" 
            :class="{active: activeTabIndex === i}"
            v-for="(category, key, i) in music.songArray">
            <a 
              :href="'/src/assets/mp3/' + song.mp3" 
              class="song"
              :class="{active: activeSongIndex === k}"
              :data-category="key"
              :data-tab-index="i"
              :data-song-index="k"
              v-for="(song, k) in category"
              @click="playSong">
              {{song.name}}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {soundManager} from 'soundmanager2';
  import music from 'root/data.json';
  import progressBar from 'root/components/progress-bar.js';

  export default {
    name: 'page-audio',
    data () {
      return {
        music: music,
        activeTabIndex: 1,
        activeSongIndex: 1,
        activeSong: null,
        playing: false,
        duration: '00:00',
        volume: 70,
        lastVolume: 70, 
        now: '00:00',
        updateVolume: null,
        updatePosition: null
      }
    },
    computed: {
      playList: function () {
        return Object.keys(music.songArray).reduce(function (acc, val, i) {
          return acc.concat(music.songArray[val].map((x, j) => ({
            mp3: x.mp3,
            name: x.name,
            category: val,
            tabIndex: i,
            songIndex: j
          })));
        }, [])
      }
    },
    methods: {
      pad: function(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
      },
      changeTab (index) {
        this.activeTabIndex = index;
      },
      getActiveSong () {
        return this.playList.filter(x => {
          return x.songIndex === this.activeSongIndex && x.tabIndex === this.activeTabIndex;
        })[0]
      },
      prev () {
        var activeSong = this.getActiveSong(),
            nextSong = this.playList.indexOf(activeSong) 
            ? this.playList[this.playList.indexOf(activeSong) - 1] 
            : this.playList[this.playList.length -1];

        this.activeTabIndex = nextSong.tabIndex;
        this.activeSongIndex = nextSong.songIndex;
        this.playSong(nextSong);
      },
      next () {
        var activeSong = this.getActiveSong(),
            nextSong = this.playList.indexOf(activeSong) < this.playList.length -1
            ? this.playList[this.playList.indexOf(activeSong) + 1] 
            : this.playList[0];
            
        this.activeTabIndex = nextSong.tabIndex;
        this.activeSongIndex = nextSong.songIndex;
        this.playSong(nextSong);
      },
      updateNow (now) {
        var seconds = Math.floor(now / 1000),
            minutes = Math.floor(seconds / 60),
            remainingSeconds = seconds % 60;

        this.now = this.pad(minutes, 2) + ':' + this.pad(remainingSeconds, 2);
      },
      updateDuration (duration) {
        console.log('next');
        var seconds = Math.floor(duration / 1000),
            minutes = Math.floor(seconds / 60),
            remainingSeconds = seconds % 60;

        this.duration = this.pad(minutes, 2) + ':' + this.pad(remainingSeconds, 2);
      },
      playPause () {
        console.log('playPause');
        this.playing = !this.playing
      },
      playSong (e) {
        if (e.target) {
          e.preventDefault();          
        }
        console.log('playSong');
        var self = this,
            song;

        if (this.activeSong) {
          this.activeSong.destruct();
        }

        this.playing = true;
        this.activeSongIndex = e.songIndex || e.target.getAttribute('data-song-index') * 1;
        this.activeCategory = e.category || e.target.getAttribute('data-category');
        this.duration = null;

        song = !e.target ? e : this.playList.filter(x => x.tabIndex === this.activeTabIndex && x.songIndex === this.activeSongIndex)[0];
        //console.log('song', song);

        this.activeSong = soundManager.createSound({
          url: '/src/assets/mp3/' + song.mp3,
          whileloading: function() {
            if (this.duration !== self.duration) {
              self.duration = this.duration;
              self.updateDuration(self.duration);
            }
          },
          whileplaying: function() {
            self.now = this.position;
            self.updateNow(self.now);
            self.updatePosition(Math.floor((this.position / this.duration) * 100))
          },
          onfinish: function () {
            self.next();
          }
        });

        this.activeSong.play();
        this.activeSong.setVolume(this.volume);

        console.log('this.activeSong', this.activeSong);
      },
      speaker () {
        console.log('speaker');
      },
      setVolume () {
        //console.log('this.$refs', this.$refs);
        return progressBar({
          container: this.$refs.volumeContainer,
          pointer: this.$refs.volumePointer,
          current: this.$refs.volumeCurrent,
          cb: function (percent) {
            //console.log(percent)
          }
        });
      },
      setPosition () {
        return progressBar({
          container: this.$refs.positionContainer,
          pointer: this.$refs.positionPointer,
          current: this.$refs.positionCurrent,
          cb: function (percent) {
            //console.log(percent)
          }
        });
      }
    },
    mounted () {
      //console.log(this.music);
      this.updateVolume = this.setVolume();
      this.updatePosition = this.setPosition();

      console.log('this.playList', this.playList);
    }
  }
</script>

<style lang="scss">
@import '~root/components/scss/_variables';
@import '~root/components/scss/_mixins';
#audio {
  .inner {
    .row {
      margin: 0 .9375rem;
      padding: .9375rem;
      background: $white;
      border: 2px solid $blue;
    }
  }
  .tabLinks {
    font-size: 0;
  }
  .tab {
    display: inline-block;
    width: auto;
    padding: 15px;
    margin-right: 10px;
    background: $white;
    font-size: 16px;
    line-height: 1;
    color: $white;
    background: $blue;
    margin-bottom: 10px;
    border-right: 1px solid $white;
    &:last-child {
      border-right: none;
    }
    &.active {
      color: $white;
      background: $red;
    }
  }
  .song {
    display: block;
    padding: 10px;
    text-decoration: none;
    color: $blue;
    border-bottom: 2px solid $blue;
    &:last-child {
      border-bottom: none;
    }
    &.active, &:hover {
      color: $white;
      background: $red;
    }
  }
  .list {
    margin-bottom: 0;
  }
  .control {
    margin-bottom: 10px;
    font-size: 0;
    button, div {
      display: inline-block;
      vertical-align: middle;
      position: relative;
      margin: 0 10px;
    }
    .prev {
      border-left: 3px solid $black;
      span {
        display: block;
        width: 0;
        height: 0;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
        border-right: 30px solid $black;
      }
    }
    .play-pause {
      min-width: 30px;
      .play {
        display: block;
        margin: 0 auto;
        width: 0;
        height: 0;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
        border-left: 30px solid $black;
      }
      .pause {
        display: none;
        margin: 0 auto;
        width: 15px;
        height: 40px;
        border-left: 5px solid $black;
        border-right: 5px solid $black;
      }
      &.playing {
        .play {
          display: none;
        }
        .pause {
          display: block;
        }
      }
    }
    .next {
      border-right: 3px solid $black;
      span {
        display: block;
        width: 0;
        height: 0;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
        border-left: 30px solid $black;
      }
    }
    .total, .decor, .now {
      display: inline-block;
      vertical-align: middle;
      font-size: 16px;
    }
    .decor {
      margin: 0 5px;
    }
    .now {
      margin-left: 10px;
    }
    .total {
      margin-right: -10px;
      min-width: 40px;
    }
    .line {
      position: relative;
      cursor: pointer;
      width: 200px;
      height: 40px;
      &:before, .current {
        content: '';
        z-index: 1;
        background: $black;
        height: 10px;
        width: 100%;
        @include centerY();
      }
      .current {
        width: 0;
        margin: 0;
        background: $peach;
      }
      .pointer {
        position: absolute;
        z-index: 1;
        width: 20px;
        height: 20px;
        left: 0;
        top: 0;
        margin: 0;
        background: $peach;
        border-radius: 50%;
        @include center();
        left: 0;
      }
    }
    .volume {
      .line {
        width: 100px;
      }
    }
    .speaker {
      display: inline-block;
      vertical-align: middle;
      margin: 0 10px;
      cursor: pointer;
      &.muted {
        svg {
          path {
            display: none;
          }
        }
      }
      svg {
        width: 50px;
        height: 50px;
      }
    }
  }

  @media #{$tablet} {
    .tab {
      width: 25%;
      padding: 15px;
      margin: 0;
    }
  }
}
</style>