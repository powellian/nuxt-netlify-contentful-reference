<template>
  <div>
    <b-carousel
      :animated="animated"
      :autoplay="autoPlay"
      :pause-hover="pauseHover"
      :interval="interval"
      :indicator="false"
      :arrow="arrow"
      :repeat="arrowBoth"
      :arrow-hover="arrowHover"
      :icon-pack="iconPack"
      :icon-prev="iconPrev"
      :icon-next="iconNext"
      :icon-size="iconSize"
    >
      <!-- <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <div :class="`hero is-medium is-${carousel.color}`">
          <div class="hero-body has-text-centered">
            <h1 class="title">{{ carousel.title }}</h1>
          </div>
        </div>
      </b-carousel-item> -->
      <b-carousel-item
        v-for="(galleryImg, index) in project.galleryImages"
        :key="project.galleryImages[index]"
      >
        <img :src="`${project.galleryImages[index]}`" />
      </b-carousel-item>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interval: 3000,
      animated: 'fade',
      autoPlay: true,
      pauseHover: true,
      arrow: true,
      arrowBoth: false,
      arrowHover: false,
      iconPack: 'mdi',
      iconPrev: 'arrow-left',
      iconNext: 'arrow-right',
      iconSize: ''
      // indicator: false,
      // carousels: [
      //   { title: 'Slide 1', color: 'info' },
      //   { title: 'Slide 2', color: 'success' },
      //   { title: 'Slide 3', color: 'warning' },
      //   { title: 'Slide 4', color: 'danger' }
      // ]
    }
  },
  async asyncData({ $content, params, error }) {
    const project = await $content('projects', params.slug)
      .sortBy('createdAt', 'asc')
      .fetch()

    // console.log(`Gallery images: ${project}`)
    // console.log(project)
    console.log(project.galleryImages)

    return {
      project
    }
  }
}
</script>

<style lang="scss">
.carousel {
  margin-bottom: calc(var(--common-size) / 1.2);
}
.carousel-pause {
  display: none !important;
}
</style>
