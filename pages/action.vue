<template>
  <div>
    <Hero
      :title="page.title"
      :subtitle="`${page.location} - ${page.date}`"
      :image="page.header.image"
      :full="false"
      :image-url="page.header.more"
    >
      {{ page.header.preamble }}
    </Hero>

    <press-release
      :prefix="page.press.prefix"
      :sub="page.press.subtitle"
      :title="page.press.title"
    >
      {{ page.body }}
      <!-- <nuxt-content :document="page.body" /> -->
    </press-release>
    <panel :press="page.press.links" :livestream="page.livestreams" />
    <photo-strip
      v-for="{ images, name } in page.images"
      :key="name"
      :images="images"
      :title="name"
    />
    <video-embed v-if="page.video" :url="page.video" />
    <action-map v-if="page.coordinates" :coordinates="page.coordinates" />
  </div>
</template>

<script>
import Action from '~/mixins/Action.js'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  mixins: [Action],
  async asyncData({ $content, route, $contentful }) {
    const res = await client.getEntries({
      content_type: 'action',
      'fields.action[in]': Number(route.meta[0].action)
    })
    const fields = res.items[0].fields
    const page = {
      action: `#0${fields.action}`,
      date: fields.date,
      title: fields.title,
      body: fields.body,
      images: fields.images.map((imageGroup) => {
        return {
          name: imageGroup.fields.date,
          images: imageGroup.fields.images.map((image) => image.fields.file.url)
        }
      }),
      location: fields.location,
      coordinates: fields.locations.map((location) => location.fields.location),
      press: {
        prefix: fields.pressPrefix,
        title: fields.pressTitle,
        subtitle: fields.pressSubtitle,
        links: fields.pressLinks.map((link) => link.fields)
      },
      livestreams: fields.livestreams.map((link) => link.fields),
      header: {
        image: fields.headerImage.fields.file.url,
        preamble: fields.headerPreamble,
        // FIXME: Grap this field from somewhere
        more: ''
      }
    }
    return {
      page
    }
  }
}
</script>
