<template>
  <main class="section">
    <div
      class="container is-max-desktop content-block content-block--outer-full"
    >
      <div
        class="column is-12-mobile is-8-tablet is-offset-1-tablet content-block--inner"
      >
        <h1>About</h1>
        <nuxt-content :document="AboutContact" />
        <h2>Contact</h2>
        <p>
          Contact:
          <a :href="`mailto:${AboutContact.emailContact}`">via website</a>
          <br />
          Instagram:
          <a :href="`https://www.${AboutContact.instagramContact}`"
            >@s_tagra-m</a
          >
        </p>
        <h3>Gallery representation</h3>
        <p>le name<br />445 The Road<br />London ABC 123</p>
        <p>
          <a :href="`mailto:${AboutContact.emailRepresentation}`">{{
            AboutContact.emailRepresentation
          }}</a>
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const AboutContact = await $content('about/about-copy').fetch()
    // console.log(AboutContact)

    return {
      AboutContact
    }
  },
  head() {
    return {
      title: this.AboutContact.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.AboutContact.descriptionSeo
        }
      ]
    }
  }
}
</script>
