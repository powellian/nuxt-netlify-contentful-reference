<template>
  <div>
    <GlobalNavBuefy />
    <Nuxt />
    <GlobalFooter />
  </div>
</template>

<style lang="scss">
@import '@/assets/css/global/content-block';

::v-deep .nuxt-content {
  // margin-bottom: calc(var(--common-size));
  @include owlzero;
}
</style>
