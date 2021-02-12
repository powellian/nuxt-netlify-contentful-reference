<template>
  <div class="hero-head global-nav">
    <div class="container">
      <nav class="navbar">
        <div class="navbar-brand">
          <h1>
            <nuxt-link to="/" class="navbar-item" id="homelink">
              Sława Harasymowicz
            </nuxt-link>
          </h1>
          <div
            class="navbar-burger"
            @click="showNav = !showNav"
            :class="{ 'is-active': showNav }"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="navbar-menu" :class="{ 'is-active': showNav }">
          <div class="navbar-end">
            <nuxt-link class="navbar-item" to="/projects">Projects</nuxt-link>
            <nuxt-link class="navbar-item" to="/about"
              >About / Contact</nuxt-link
            >
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNav: false
    }
  }
}
</script>
