<template>
	<div class="article">
   <slot></slot> 
  </div>
</template>

<style lang="scss">
.article {
  strong {
    display: inline-block;
    margin-bottom: 5px;
  }
  img {
    vertical-align: top;
    max-width: 200px;
    margin-bottom: 5px;
    &.left {
      float: left;
      margin-right: 10px;
    }
    &.right {
      float: right;
      margin-left: 10px;
    }
  }
}
</style>