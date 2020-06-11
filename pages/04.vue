<template>
  <div>
    <ti-hero
      :title="page.title"
      :subtitle="`${page.location} - ${page.date}`"
      :image="page.header.image"
      :full="false"
    >
      {{ page.header.preamble }}
    </ti-hero>

    <press-release
      :prefix="false"
      :sub="page.press.subtitle"
      :title="page.press.title"
    >
      <nuxt-content :document="page" />
    </press-release>
    <panel :press="page.press.links" :livestream="page.livestreams" />
    <photo-strip
      v-for="(images, key) in page.images"
      :key="key"
      :images="images"
      :title="key"
    />
    <video-embed v-if="page.video" :url="page.video" />
    <action-map v-if="page.coordinates" :coordinates="page.coordinates" />
  </div>
</template>

<script>
import Action from '~/mixins/Action.js'

export default {
  mixins: [Action],
  async asyncData({ $content }) {
    const page = await $content('04').fetch()
    return {
      page
    }
  }
}
</script>
