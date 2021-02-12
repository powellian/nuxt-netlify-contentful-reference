<template>
  <section>
    <div class="buttons">
      <b-button
        label="Launch image modal (HTML)"
        type="is-primary"
        size="is-medium"
        @click="imageModal"
      />
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    imageModal() {
      const h = this.$createElement
      const vnode = h('div', { class: 'WHUPPA' }, [
        // h('img', {
        //   attrs: {
        //     src: 'https://placekitten.com/g/2000/1125'
        //   }
        // })
        h('cld-video', {
          props: ['publicId', 'videoCodec', 'controls']
        })
      ])
      this.$buefy.modal.open({
        content: [vnode],
        // fullScreen: true
        width: '90%'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  .content-block--inner & {
    margin-top: 0;
  }
}
</style>
