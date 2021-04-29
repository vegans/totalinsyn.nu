<template>
  <div>
    <hero
      v-for="action in actions"
      :key="action.slug"
      :title="action.title"
      :subtitle="`${action.location} - ${action.date}`"
      :image="action.header.image"
      :url="`/${action.slug}`"
    >
      {{ action.header.preamble }}
    </hero>
  </div>
</template>

<script>
export default {
  async asyncData({ $contentful }) {
    const res = await $contentful.getEntries({
      content_type: 'action'
    })
    const actions = res.items
      .map((action) => {
        return {
          slug: `0${action.fields.action}`,
          title: action.fields.title,
          location: action.fields.location,
          date: action.fields.date,
          order: action.fields.action,
          header: {
            image: action.fields.headerImage.fields.file.url,
            preamble: action.fields.headerPreamble
          }
        }
      })
      .sort((a, b) => a.order - b.order)
    return {
      actions
    }
  }
}
</script>
