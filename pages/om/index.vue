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
  async asyncData({ $contentful }) {
    const res = await $contentful.getEntries({
      content_type: 'page'
    })
    const pages = res.items
      .filter((item) => item.fields.slug.startsWith('om/'))
      .map((item) => {
        const res2 = {
          path: '/' + item.fields.slug,
          title: item.fields.title,
          order: item.fields.menu.fields.order
        }
        return res2
      })
      .sort((a, b) => a.order - b.order)
    return {
      pages
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
