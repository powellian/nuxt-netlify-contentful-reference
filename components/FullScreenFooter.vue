<template>
  <div class="container global-footer">
    <p><small>© The Place202-xyz</small></p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.global-footer {
  text-align: right;

  .dark & {
    p {
      background: var(--black);
      color: var(--white);
      display: inline-block;
      padding: 0 5px 1px;
      line-height: 1.25;
    }
  }
}
</style>
