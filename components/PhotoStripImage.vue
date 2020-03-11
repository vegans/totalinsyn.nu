<template>
  <div class="column">
    <nuxt-img :src="`${image}.jpg`" image-style="thumbnail" />
    <thumbnail v-show="false" :image="`${image}.jpg`" />
  </div>
</template>

<script>
import Thumbnail from '~/components/Thumbnail'

export default {
  components: {
    Thumbnail
  },
  props: {
    image: String
  }
}
</script>
