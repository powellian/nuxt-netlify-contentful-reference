<template>
  <nav class="crumbtrail">
    <ul>
      <li
        v-for="(crumb, index) in crumbs"
        :key="index"
        property="itemListElement"
        typeof="ListItem"
      >
        <NLink property="item" typeof="WebPage" :to="crumb.path">
          <span property="name">{{
            $route.fullPath === crumb.path && title !== null
              ? title
              : crumb.title
          }}</span>
        </NLink>
        <meta property="position" :content="index + 2" />
      </li>
    </ul>
  </nav>
</template>

<script>
const titleCase = require('ap-style-title-case')
// import * as titleCase from 'ap-style-title-case' // TODO: see if ESM can replace CommonJS

export default {
  props: {
    title: {
      type: String,
      default: null
    }
  },

  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
      const crumbs = []

      // console.log(`Breadcrumbs: ${params}`)

      let path = ''

      params.forEach((param, index) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)

        if (match.name !== null) {
          crumbs.push({
            title: titleCase(param.replace(/-/g, ' ')),
            ...match
          })
        }
      })

      return crumbs
    }
  }
}
</script>

<style lang="scss" scoped>
.crumbtrail {
  ul {
    list-style: none;
  }

  li {
    display: inline;

    &:after {
      /* content: ' » '; */
      content: ' / ';
      display: inline;
      font-size: 0.9em;
      color: #aaa;

      padding: 0 0.0725em 0 0.15em;
    }

    &:last-child:after {
      content: '';
    }
    a {
      font-size: rem-calc(15);

      &.nuxt-link-exact-active.nuxt-link-active {
        font-weight: 400;
        color: lighten($color: #000, $amount: 50);
        cursor: not-allowed;
        text-decoration: none;
        border: none;
      }
    }
  }
}
</style>
