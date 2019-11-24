<template>
  <section class="container is-fluid">
    <div :data-content="title" class="is-divider"></div>
    <div class="columns">
      <div class="column">
        <div class="columns is-mobile">
          <photo-strip-image :image="images[0]" />
          <photo-strip-image :image="images[1]" />
        </div>
      </div>
      <div class="column">
        <div class="columns is-mobile">
          <photo-strip-image :image="images[2]" />
          <photo-strip-image :image="images[3]" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PhotoStripImage from './PhotoStripImage'
export default {
  components: {
    PhotoStripImage
  },
  props: {
    images: Array,
    title: String
  }
}
</script>
