<template>
  <div>
    <nuxt-content :document="homey" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const homey = await $content('homepage', params.slug).fetch()

    return {
      homey
    }
  }
}
</script>

<style lang="scss" scoped></style>
