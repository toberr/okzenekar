<template>
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
            </div>
            <span class="now">00:00</span>
            <span class="decor">/</span>
            <span class="total">00:00</span>
          </div>
          <div class="volume">
            <span class="speaker">
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
            <div class="line">
              <div class="pointer"></div>
              <div class="current"></div>
            </div>
          </div>
        </div>
        <div class="tabContainer list">
          <div class="tabLinks" >
            <button 
              class="tab"
              :class="{active: activeTab === i}"
              v-for="(category, i) in music.categoryNames"
              @click="changeTab(i)">
              {{category}}
            </button>
          </div>
          <div 
            class="tabContent" 
            :class="{active: activeTab === i}"
            v-for="(category, key, i) in music.songArray">
            <a 
              :href="'/src/assets/mp3/' + song.mp3" 
              class="song" 
              v-for="(song, k) in category">
              {{song.name}}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import music from 'root/components/music.json';
  export default {
    name: 'page-audio',
    data () {
      return {
        music: music,
        activeTab: 0,
        activeSong: 4
      }
    },
    methods: {
      changeTab (index) {
        this.activeTab = index;
      }
    },
    mounted () {
      console.log(this.music);
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