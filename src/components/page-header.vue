<template>
  <div class="header">
    <div class="decor">header</div>
    <nav>
      <template v-for="route in routes">
        <router-link :to="route.path" exact>{{route.name}}</router-link>
      </template>
    </nav>
  </div>
</template>

<script>
  import routes from '../router'
  export default {
    name: 'page-header',
    data () {
      return {
        routes: routes
      }
    }
  }
</script>

<style lang="scss">
  .header{
    margin-bottom: 10px;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid #000;
    .decor{
      padding-bottom: 7px;
      margin-bottom: 7px;
      border-bottom: 1px solid #000;
    }
    nav{
      a{
        display: inline-block;
        margin: 0 5px 0 5px;
        padding: 3px;
        color: #42b983;
        &.router-link-active{
          color: white;
          background: #42b983;
        }
      }
    }
  }
</style>