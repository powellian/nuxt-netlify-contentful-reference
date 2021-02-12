<template>
  <header class="global-nav global-nav--outer">
    <nav>
      <div class="container is-max-desktop">
        <b-navbar class="navbar global-nav--inner">
          <template slot="brand">
            <h1>
              <nuxt-link to="/" class="navbar-item" id="homelink"
                >SDHP</nuxt-link
              >
            </h1>
          </template>
          <template slot="end">
            <b-navbar-item tag="div">
              <div class="buttons">
                <nuxt-link class="navbar-item" to="/projects"
                  >Projects</nuxt-link
                >
                <nuxt-link class="navbar-item" to="/about"
                  >About / Contact</nuxt-link
                >
              </div>
            </b-navbar-item>
          </template>
        </b-navbar>
      </div>
    </nav>
  </header>
</template>
