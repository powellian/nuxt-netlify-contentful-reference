<template>
  <div class="hero is-fullheight homepage dark">
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
      <div class="container is-max-desktop homepage__copyblock">
        <div class="column is-7 is-offset-1">
          <h1>Title: {{ page.title }}</h1>
          <p>Description: {{ page.description }}</p>
          <nuxt-content :document="page" />
        </div>
      </div>
    </div>

    <!-- Hero footer: will stick at the bottom-->
    <div class="hero-foot">
      <div class="container is-max-desktop">
        <div class="column contentblock contentblock--outer">
          <GlobalFooter />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'fullScreen',
  async asyncData({ $content }) {
    const page = await $content('homepage').fetch()

    return {
      page
    }
  }
  // head() {
  //   // class: 'homepage',
  // },
  // bodyAttrs() {
  //   return { class: ['testy', 'whupla'] }
  // },
}
</script>

<style lang="scss" scoped>
.homepage {
  background-image: url('../assets/img/landingpage_image.jpg');
  background-size: cover;
  background-repeat: no-repeat;

  &__copyblock {
    align-self: flex-start;
    margin-top: 10vh;

    .dark & {
      h1,
      h2,
      p {
        color: var(--white);
        padding: 0 5px 1px;
        line-height: 1.25;
      }
      h1,
      h2,
      h3 {
        display: inline-block;
      }

      .column {
        background: var(--black);
      }
    }
  }
}
</style>
