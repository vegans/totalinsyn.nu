<template>
  <section>
    <img :src="thumbnail" @click="isModalActive = true" class="image" />
    <b-modal :active.sync="isModalActive">
      <p class="image is-16by9">
        <img :src="image" />
      </p>
    </b-modal>
  </section>
</template>

<script>
export default {
  props: {
    image: String,
    thumbnail: String
  },
  data() {
    return {
      isModalActive: false
    }
  }
}
</script>
