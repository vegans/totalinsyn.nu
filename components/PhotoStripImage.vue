<template>
  <div class="column" data-testid="thumbnail">
    <a :href="original"><img :src="thumbnail" alt="Thumbnail"/></a>
  </div>
</template>

<script>
export default {
  props: {
    image: String
  },
  computed: {
    thumbnail() {
      return require(`~/assets${this.image}.jpg?resize&size=300`)
    },
    original() {
      return require(`~/assets${this.image}.jpg?original`)
    }
  }
}
</script>
