<template>
  <div class="section">
    <div class="container is-max-desktop content-block content-block--outer">
      <div class="column is-12-mobile is-10-tablet is-offset-1-tablet">
        <ProjectsBreadcrumbs />
      </div>
    </div>
    <div class="container is-max-desktop content-block">
      <div
        class="column is-12-mobile is-10-tablet is-offset-1-tablet content-block--inner"
      >
        <h1 class="is-size-5">{{ project.title }}</h1>
        <div v-if="project.galleryImages">
          <b-carousel
            :animated="animated"
            :autoplay="autoPlay"
            :pause-hover="pauseHover"
            :interval="interval"
            :indicator="false"
            :arrow="arrow"
            :repeat="arrowBoth"
            :arrow-hover="arrowHover"
          >
            <b-carousel-item
              v-for="(galleryImg, i) in project.galleryImages"
              :key="project.galleryImages[i]"
            >
              <img :src="`${project.galleryImages[i]}`" />
            </b-carousel-item>
          </b-carousel>
        </div>
        <div v-else-if="project.galleryVideo">
          <cld-video
            :publicId="`${project.galleryVideo}`"
            videoCodec="auto"
            controls="true"
          >
          </cld-video>
        </div>
        <div v-else>
          <h5>
            There is a problem loading the media assets for this project. <br />
            Please try refreshing your browser.
          </h5>
        </div>
        <hr />
        <ModalFullScreen />
        <ModalFullScreen02 />
        <hr />
        <nuxt-content :document="project" />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectsBreadcrumbs from '@/components/ProjectsBreadcrumbs'
import ModalFullScreen from '@/components/ModalFullScreen'

export default {
  async asyncData({ $content, params, error }) {
    const project = await $content('projects', params.slug)
      .sortBy('createdAt', 'asc')
      .fetch()
    // TODO: clear console.logs
    // console.log(`galleryImages: ${project.galleryImages}`)
    // console.log(`galleryVideo: ${project.galleryVideo}`)
    return {
      project
    }
  },
  data() {
    return {
      interval: 5000,
      animated: 'fade',
      autoPlay: true,
      pauseHover: true,
      arrow: true,
      arrowBoth: false,
      arrowHover: false,
      iconPrev: 'chevron-left',
      iconNext: 'chevron-right'
    }
  },
  head() {
    return {
      title: this.project.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.descriptionSeo
        }
      ]
    }
    // console.log(`Proj Description: ${project.description}`)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/projects/projects';
</style>
<style lang="scss">
.carousel-pause {
  display: none !important;
}
.carousel-item {
  // margin: 0;
}
video {
  width: 100%;
  height: auto;

  &:focus {
    outline: none;
  }
}
</style>
