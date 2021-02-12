<template>
  <!--<div class="hero is-fullheight">
     <div class="global-nav-outer">
      <HomepageNavBuefy />
    </div>
    <Nuxt />
    <HomepageFooter />
  </div> -->

  <Nuxt />
</template>

<style lang="scss" scoped>
// @import '~/assets/global/main.scss';
.global-footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
body {
  background: green !important;
  &::before {
    content: 'THE BODY';
    position: absolute;
    top: 40vh;
    left: 40vw;
  }
}
</style>
