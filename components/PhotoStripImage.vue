<template>
  <div class="column" data-testid="thumbnail">
    <nuxt-img :src="`${image}.jpg`" image-style="thumbnail" alt="Thumbnail" />
  </div>
</template>

<script>
export default {
  props: {
    image: String
  }
}
</script>
