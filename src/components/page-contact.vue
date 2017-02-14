<template>
  <div id="contact">
    <div class="inner">
      <div class="row">
        <div class="columns small-6 medium-4 desktop-4">
          <div><img alt="ok zenekar lakodalom party bál eksüvő" src="~root/assets/img/pic_saxo.png"> <img alt="ok zenekar lakodalom party bál eksüvő" src="~root/assets/img/pic_klarinet.png"></div>
          <div>
            <h3><span>O</span>berritter Ferenc</h3>
            <p>szaxofon, klarinét, ének</p>
            <p>06-30/296-3015</p>
          </div>
        </div>
        <div class="columns small-6 medium-4 desktop-4">
          <div><img alt="ok zenekar lakodalom party bál eksüvő" src="~root/assets/img/pic_harmonika.png"> <img alt="ok zenekar lakodalom party bál eksüvő" src="~root/assets/img/pic_szint.png"></div>
          <div>
            <h3><span>K</span>rutki Gábor</h3>
            <p>harmonika, szintetizátor, ének</p>
            <p>06-20/9860-214</p>
          </div>
        </div>
        <div class="columns small-12 medium-4 desktop-4">
          <a class="email" href="mailto:okzenekar@gmail.com" title="okzenekar@gmail.com">okzenekar@gmail.com</a> <a class="facebook" href="http://hu-hu.facebook.com/pages/OK-Zenekar/267446909949427" target="_blank" title="okzenekar">kövess minket Facebookon</a> <a class="youtube" href="http://www.youtube.com/user/OkzenekarDuo" target="_blank" title="okzenekar">Youtube csatornánk</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page-contact'
  }
</script>

<style lang="scss">
@import '~root/components/scss/_variables';
@import '~root/components/scss/_mixins';
#contact {
  margin-bottom: 0.9375rem;
  clear: both;
  .inner {
    .row {
      margin: 0 0.9375rem;
      padding: 0.9375rem 0;
      background: $white;
      border: 2px solid $black;
    }
  }
  .columns {
    div {
      margin-bottom: 10px;
    }
    h3 {
      font-weight: bold;
      span {
        color: $red;
      }
    }
    a {
      display: inline-block;
      margin-bottom: 10px;
      padding-left: 40px;
      position: relative;
      &:before {
        content: '';
        left: 0;
        @include centerY();
        height: 32px;
        width: 32px;
        background-repeat: no-repeat;
        background-position: 0 0;
      }
      &:hover:before {
        background-position: 0 100%;
      }
      &.email:before {
        background-image: url(~root/assets/img/pic_email.png);
      }
      &.facebook:before {
        background-image: url(~root/assets/img/pic_facebook.png);
      }
      &.youtube:before {
        background-image: url(~root/assets/img/pic_youtube.png);
      }
    }
    &:nth-child(2) {
      div {
        &:first-child {
          font-size: 0;
        }
        img {
          max-width: 50%;
        }
      }
    }
  }
}
@media #{$tablet} {
  #contact {
    .columns {
      div {
        &:first-child {
          padding-right: 20px;
          font-size: 0;
          img {
            max-width: 50%;
          }
        }
        vertical-align: top;
        img {
          display: inline-block;
        }
        display: table-cell;
      }
    }
  }
}
</style>