<template>
  <div>
    <ti-hero
      :title="page.title"
      :subtitle="`${page.location} - ${page.date}`"
      :image="page.header.image"
      :full="false"
      :image-url="page.header.more"
    >
      {{ page.header.preamble }}
    </ti-hero>
    <press-release :sub="page.press.subtitle" :title="page.press.title">
      <nuxt-content :document="page" />
    </press-release>
    <panel :press="page.press.links" :livestream="page.livestreams" />
    <photo-strip
      v-for="(images, date) in page.images"
      :key="date"
      :images="images"
      :title="date"
    />
    <video-embed :url="page.video" />
    <action-map :coordinates="page.coordinates" />
  </div>
</template>

<script>
import Action from '~/mixins/Action.js'

export default {
  mixins: [Action],
  async asyncData({ $content }) {
    const page = await $content('02').fetch()
    return {
      page
    }
  }
}
</script>
