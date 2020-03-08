<template>
  <div class="column">
    <thumbnail :image="`${image}.jpg`" />
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
