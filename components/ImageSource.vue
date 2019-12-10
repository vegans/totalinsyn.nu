<template>
  <div class="image">
    <img :src="src" />
    <div class="text">
      {{ text }}
      <a v-if="href" :href="href">Källa</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    text: String,
    href: String
  }
}
</script>

<style lang="scss" scoped>
a,
img {
  display: block;
}

.image {
  max-width: 600px;
  margin: 10px auto;
  img {
    max-width: 100%;
  }
}

.text {
  text-align: center;
}
</style>
