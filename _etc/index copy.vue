<template>
  <!-- <div
    class="hero is-fullheight homepage dark"
    :style="
       {
        backgroundImage: 'url('+ bgImage +')';
      }"
  > -->
  <div
    class="hero is-fullheight homepage dark"
    :style="
       {
        background: 'red';
      }"
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
      <div class="container is-max-desktop homepage__copyblock">
        <div :class="[isCaps ? capsClass : '', requiredClasses]">
          <p>
            Zatoka / The Bay New show at Archaeology of Photography Foundation
            FAF Warsaw.
          </p>
          <p>Online - coming soon. Panel discussion 11.12.2020 (Zoom)</p>
          <!-- <nuxt-content :document="page" /> -->
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
      // bgImage: '../assets/img/landingpage_image.jpg',
      // bgImage: 'https://placekitten.com/g/1600/900',
      isCaps: true,
      capsClass: 'caps',
      requiredClasses: 'column is-8 is-offset-0'
    }
  }
}
</script>

<style lang="scss" scoped>
.homepage {
  // background-image: url('../assets/img/landingpage_image.jpg');
  background-size: cover;
  background-repeat: no-repeat;

  &__copyblock {
    align-self: flex-start;
    margin-top: 10vh;

    h1,
    h2,
    p {
      padding: 0 5px 1px;
      line-height: 1.25;
    }
    .dark & {
      h1,
      h2,
      p {
        color: var(--white);
      }

      .column {
        background: var(--black);
      }
    }
    .caps {
      text-transform: uppercase;
    }
  }
}
</style>
