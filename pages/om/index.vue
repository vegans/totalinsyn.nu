<template>
  <div>
    <Hero
      :type="page.hero.type"
      :title="page.hero.title"
      :subtitle="page.hero.subtitle"
      :image="page.hero.image"
    >
      {{ page.hero.text }}
    </Hero>
    <div class="content">
      <article class="prose prose-lg">
        <nuxt-content :document="page" />
      </article>
    </div>
  </div>
</template>

<script>
import Action from '~/mixins/Action.js'

export default {
  mixins: [Action],
  async asyncData({ $content, route }) {
    const page = await $content('pages/om/index').fetch()
    return {
      page
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
