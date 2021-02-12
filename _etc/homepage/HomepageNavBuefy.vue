<template>
  <b-navbar fixedTop class="container is-max-desktop">
    <template slot="brand">
      <h1>
        <nuxt-link to="/" class="navbar-item" id="homelink">
          <!-- Homepage -->
          SDHP
        </nuxt-link>
      </h1>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <nuxt-link class="navbar-item" to="/projects">Projects</nuxt-link>
          <nuxt-link class="navbar-item" to="/about">About / Contact</nuxt-link>
        </div>
      </b-navbar-item>
    </template>
    <!-- </div>
  </div> -->
  </b-navbar>
</template>
