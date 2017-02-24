<template>
  <div id="header">
    <button class="menu hide-for-large" @click="toggleMenu">menu</button>
    <nav ref="nav" :show="show">
      <template v-for="route in routes">
        <router-link v-if="!route.sub" ref="links" :to="route.path" exact>{{route.data.linkName}}</router-link>
        <div class="sub" v-else>
          <span class="categoryTitle">{{route.sub}}</span>
          <div class="categoryLinks">
            <router-link v-for="subRoute in route.links" ref="links" :to="subRoute.path" exact>{{subRoute.data.linkName}}</router-link>
          </div>
        </div>
      </template>
    </nav>
    <h1><span>O</span>k<span>z</span>enekar</h1>
  </div>
</template>

<script>

  import routes from '../router'
  export default {
    name: 'page-header',
    data () {
      return {
        routes: this.createSubCategories(routes.slice()),
        show: false
      }
    },
    methods: {
      createSubCategories (routes) {
        var temp = {};
        routes.forEach(function (route, i) {
          var c = route.data.category;
          if (c && temp[c]){
            route.i = i;
            temp[c].push(route)
          } else if (c && !temp[c]){
            route.i = i;
            temp[c] = [route]
          }
        });

        Object.keys(temp).forEach(function (key) {
          temp[key].forEach(function (route, i) {
            routes.splice(route.i-i, 1);
          });
          routes.splice(temp[key][0].i, 0, {
            sub: key,
            links: temp[key]
          })
        });
        return routes;
      },
      getMenuHeight () {
        return this.$refs.links
          .map(x => x.$el.offsetHeight)
          .reduce((a, b) => a + b, 0) + 'px';
      },
      showMenu () {
        this.show = true;
        //console.log('open');
        this.$refs.nav.style.height = this.getMenuHeight();
        setTimeout(() => {
          this.$refs.nav.style.height = 'auto';
        },300)
      },
      hideMenu () {
        this.show = false;
        //console.log('hide');
        this.$refs.nav.style.height = this.getMenuHeight();
        setTimeout(() => {
          this.$refs.nav.style.height = '0px';
        });
        setTimeout(() => {
          this.$refs.nav.style.height = '';
        },300);
      },
      toggleMenu () {
        this.show = !this.show;
        if (this.show) {
          this.showMenu();
        } else {
          this.hideMenu();
        }
      }
    },
    created () {
      this.$router.afterEach(() => {
        if (this.show&& window.innerWidth < 1024){
          this.hideMenu();
        }
      });
    }
  }
</script>

<style lang="scss">
  @import '../components/scss/_variables';
  @import '../components/scss/_mixins';
  #header {
    display: block;
    position: relative;
    background: $black;
    padding: 50px 10px 0;
    font-size: 0;
    margin-bottom: 20px;
    button.menu {
      position: absolute;
      z-index: 2;
      top: 10px;
      left: 10px;
      display: inline-block;
      width: 30px;
      height: 30px;
      overflow: hidden;
      text-indent: -10000px;
      border-top: 6px solid $gray;
      border-bottom: 6px solid $gray;
      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        height: 6px;
        transform: translate(0, -50%);
        background: $gray;
      }
    }
    nav {
      overflow: hidden;
      height: 0;
      transition: height 0.3s;
      &[show] {
         height: auto;
      }
      .sub {
        a:last-child {
          border-bottom: 1px solid $gray;
        }
        span {
          display: none;
        }
      }
      a {
        display: block;
        color: $gray;
        border-bottom: 1px solid $gray;
        padding: 10px 0;
        text-decoration: none;
        text-transform: uppercase;
        padding: 10px 5px;
        font-size: 16px;
        line-height: 20px;
        &:hover {
          color: $gray;
        }
        &:last-child {
          border-bottom: none;
        }
        &.router-link-active {
          background: $blue;
        }
      }
    }

    @media #{$desktop} {
      background: none;
      padding: 0;
      nav {
        position: relative;
        z-index: 2;
      }
      h1 {
        z-index: 1;
      }
      h1 {
        position: relative;
        margin: 20px 0;
        color: $black;
        font-size: 50px;
        letter-spacing: 2px;
      }
      nav {
        height: auto;
        padding: 0 10px;
        text-align: center;
        background: $black;
        white-space: nowrap;
        overflow: visible;
        .sub {
          position: relative;
          span {
            display: inline-block;
            cursor: default;
            padding-right: 20px;
            position: relative;
            &:after {
              content: '';
              position: absolute;
              right: 0;
              top: 3px;
              width: 0;
              height: 0;
              border-left: 7px solid transparent;
              border-right: 7px solid transparent;
              border-top: 10px solid $gray;
            }
          }
          .categoryLinks {
            background: $black;
            position: absolute;
            top: 50px;
            left: 0;
            visibility: hidden;
            a {
              display: block;
              text-align: left;
            }
          }
          &:hover {
            .categoryLinks {
              visibility: visible;
            }
          }
        }
        a, .sub {
          display: inline-block;
          border-bottom: none;
          padding: 15px;
          font-size: 16px;
          line-height: 20px;
          text-transform: uppercase;
          color: $gray;
          &:first-child {
            margin-top: 0;
          }
          &:hover {
            color: $gray;
            background: $blue;
          }
        }
      }
    }
  }
</style>