<template>
  <div class="column">
    <thumbnail :image="`${image}.jpg`" :thumbnail="`${image}_thumb.jpg`" />
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
