<template>
  <div class="inner repertoire">
    <div class="row">
      <div class="small-12 medium-6 desktop-6 columns" v-for="part in parts">
        <table>
          <thead>
            <tr><th><span>C</span>ím</th><th><span>S</span>zerző/<span>E</span>lőadó</th></tr>
          </thead>
          <tbody>
            <tr v-for="song in part" :subCategory="song.type">
              <td>{{song.title}}</td>
              <td>{{song.artist}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import collection from 'root/pages/repertoire-collection.json';
export default {
  name: 'repertoire',
  data () {
    return {
      collection
    }
  },
  computed: {
    parts: function () {
      var length = this.collection.length;
      return [
        this.collection.slice(0, Math.round(length/2)),
        this.collection.slice(Math.round(length/2), length)
      ];
    }
  },
  created () {
  }
}
</script>

<style lang="scss">
@import '~root/components/scss/_variables';
.repertoire {
  h3 {
    padding-left: 0.9375rem;
    margin-bottom: 20px;
  }
  tr {
    th {
      text-align: left;
      background: $red;
      color: $gray;
      padding: 5px;
    }
    td {
      border-bottom: 1px solid $black;
      padding: 5px;
      &:first-child {
        padding-right: 20px;
      }
    }
    &[subCategory]{
      td{
        color: $white;
        background: $red;
        font-weight: bold;
        padding-left: 5px;
        &:before{
          display: none!important;
        }
        &:last-child{
          padding-bottom: 0;
        }
      }
    }
    &:last-child {
      &, td {
        border-bottom: none;
      }
    }
  }
  table {
    width: 100%;
  }
  @media #{$mobile} {
    table, tr, td, thead, tbody {
      display: block;
    }
    thead {
      display: none;
    }
    tr {
      border-bottom: 1px solid $black;
      td {
        padding: 5px 0;
        &:first-child {
          padding-right: 0;
          &:before {
            content: 'cím:';
            display: inline-block;
            background: $red;
            color: $gray;
            width: 65px;
            padding: 0 5px;
            margin-right: 10px;
          }
        }
        &:last-child {
          padding-top: 0;
          &:before {
            content: 'szerző:';
            display: inline-block;
            background: $red;
            color: $gray;
            width: 65px;
            padding: 0 5px;
            margin-right: 10px;
          }
        }
        border-bottom: none;
      }
    }
  }
  @media #{$desktop} {
    table {
      width: 100%;
    }
    tr:hover {
      td {
        background: darken($gray, 10%);
      }
    }
  }
}
</style>