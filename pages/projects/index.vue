<template>
  <main class="section">
    <div
      class="container is-max-desktop content-block content-block--outer-full"
    >
      <ul class="projects">
        <li
          v-for="(project, index) of projects"
          :key="project.slug"
          class="projects__project-card-li"
        >
          <NuxtLink
            :to="`/projects/${project.slug}`"
            class="card projects__project-card-a"
          >
            <div class="card-image">
              <figure v-if="project.galleryImages" class="image">
                <img
                  :src="`${project.thumbnail}`"
                  :alt="`${project.description}`"
                />
              </figure>
              <div v-else-if="project.galleryVideo" class="image">
                <figure>
                  <img
                    :src="`${project.thumbnail}`"
                    :alt="`${project.description}`"
                  />
                </figure>
              </div>
              <figure v-else class="image">
                <img
                  :src="`${project.thumbnail}`"
                  :alt="`${project.description}`"
                />
              </figure>
            </div>
            <div class="card-content">
              <h2 class="h5">{{ project.title }}</h2>
              <p>{{ project.description }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import ProjectsBreadcrumbs from '@/components/ProjectsBreadcrumbs'

export default {
  async asyncData({ $content }) {
    const projectsHomepage = await $content(
      'projects-homepage/projects-copy'
    ).fetch()
    const projects = await $content('projects')
      .sortBy('createdAt', 'desc')
      .fetch()
    console.log(`projects.length: ${projects.length}`)

    return {
      projectsHomepage,
      projects
    }
  },
  data() {},
  head() {
    return {
      title: this.projectsHomepage.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.projectsHomepage.description
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/projects/projects';
</style>
