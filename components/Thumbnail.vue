<template>
  <section data-testid="thumbnail">
    <div class="thumbnail" @click="isModalActive = true">
      <nuxt-img :src="image" image-style="thumbnail" />
    </div>
    <b-modal :active.sync="isModalActive">
      <p class="image is-16by9">
        <nuxt-img :src="image" image-style="large" />
      </p>
    </b-modal>
  </section>
</template>

<script>
export default {
  props: {
    image: String
  },
  data() {
    return {
      isModalActive: false
    }
  }
}
</script>

<style lang="scss" scoped>
.thumbnail {
  cursor: pointer;
}
</style>
