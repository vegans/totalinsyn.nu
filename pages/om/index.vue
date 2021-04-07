<template>
  <div>
    <ul class="list-disc">
      <li v-for="page in pages" :key="page.path">
        <nuxt-link
          class="text-yellow-600 font-extrabold text-xl"
          :to="page.path.replace('/pages', '')"
        >
          {{ page.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Action from '~/mixins/Action.js'

export default {
  mixins: [Action],
  async asyncData({ $content, route }) {
    const pages = await $content('pages/om').fetch()
    return {
      pages: pages.sort((a, b) => a.menu.order - b.menu.order)
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  max-width: 600px;
  margin: 0 auto;
  padding: 10px;
}
</style>
