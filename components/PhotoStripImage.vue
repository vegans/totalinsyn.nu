<template>
  <div class="column" data-testid="thumbnail">
    <a :href="`${image}.jpg`">
      <nuxt-img :src="`${image}.jpg`" image-style="thumbnail" alt="Thumbnail" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    image: String
  }
}
</script>
