<template>
  <div
    :class="[homepageArticle.darkTheme ? darkClass : '', requiredClassesOuter]"
    :style="{ backgroundImage: `url(${homepageArticle.bgImage})` }"
  >
    <!-- Hero head: will stick at the top-->
    <div class="hero-head global-nav global-nav--outer">
      <nav class="navbar">
        <div class="container is-max-desktop">
          <div class="column">
            <GlobalNavBuefy />
          </div>
        </div>
      </nav>
    </div>

    <!-- Hero content: will be in the middle-->
    <div class="hero-body">
      <div class="container is-max-desktop">
        <div
          :class="[
            homepageArticle.capsText ? capsClass : '',
            requiredClassesCopyblock
          ]"
        >
          <nuxt-content :document="homepageArticle" />
        </div>
      </div>
    </div>

    <!-- Hero footer: will stick at the bottom-->
    <div class="hero-foot">
      <div class="container is-max-desktop">
        <div class="column">
          <GlobalFooter />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'fullScreen',
  data() {
    return {
      // Outer block - boolean widget plus ternary:- ? dark : ''
      darkClass: 'dark',
      requiredClassesOuter: 'hero is-fullheight homepage',
      // Copyblock - boolean widget plus ternary: ? caps : ''
      capsClass: 'caps',
      requiredClassesCopyblock:
        'column is-12-mobile is-8-tablet is-offset-1-tablet'
    }
  },
  async asyncData({ $content }) {
    const homepageArticle = await $content('homepage/homepage-copy').fetch()
    console.log(homepageArticle)

    return {
      homepageArticle
    }
  },
  head() {
    return {
      title: this.homepageArticle.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.homepageArticle.descriptionSeo
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.homepage {
  background-size: cover;
  background-repeat: no-repeat;

  &.dark {
    background-color: var(--black);
  }
}

::v-deep .nuxt-content {
  background: var(--white);
  margin-top: 10vh;
  padding: calc((var(--common-size) * 1.25)) var(--common-size);
  @include owlzero;

  h1,
  h2,
  h3,
  p {
    color: var(--black);
    font-weight: var(--font-weight-headings);
  }

  .dark & {
    background: var(--black);

    h1,
    h2,
    h3,
    p {
      color: var(--white);
    }
  }

  .caps & {
    text-transform: uppercase;
  }
}
</style>
