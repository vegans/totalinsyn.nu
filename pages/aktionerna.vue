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
  async asyncData({ $content, route }) {
    const actions = await $content('actions')
      .only(['slug', 'title', 'location', 'date', 'header'])
      .sortBy('slug', 'desc')
      .fetch()
    return {
      actions
    }
  }
}
</script>
