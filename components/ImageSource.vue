<template>
  <div class="image" data-testid="image-source">
    <picture>
      <source :srcSet="require(`~/assets/${src}?webp`)" type="image/webp" />
      <source :srcSet="require(`~/assets/${src}`)" type="image/jpeg" />
      <img :src="require(`~/assets/${src}`)" />
    </picture>
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
