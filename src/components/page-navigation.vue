<template>
	<div class="pageNavigation"></div>
</template>
<script>
  import routes from '../router'
  export default {
    name: 'page-navigation',
    data () {
      return {
        routes: routes
      }
    },
    methods: {
      setDefaults () {
        this.$title = document.querySelector('title');
        this.$description = document.querySelector('meta[name="description"]');
      },
      updateMeta () {
        this.$router.afterEach(hook => {
          var temp = this.routes.filter(x => [x.path, x.path + '/'].indexOf(hook.path) !== -1 )[0];
          this.$title.innerHTML = temp.data.linkName;
          this.$description.setAttribute('content', temp.data.metaDesc);
        })
      }
    },
    created: function () {
      this.setDefaults();
      this.updateMeta();
    }
  }
</script>
<style>
	.pageNavigation{
		display: none;
	}
</style>