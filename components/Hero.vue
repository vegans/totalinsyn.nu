<template>
  <section
    :style="{ backgroundImage: `url(${image})` }"
    class="hero is-medium is-dark"
  >
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ title }}
        </h1>
        <h2 class="subtitle">
          {{ subtitle }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    subtitle: String
  }
}
</script>

<style lang="scss" scoped>
.hero {
  background-size: cover;
  background-image: url('/01/hero.jpg');
  background-color: #828282;
  background-blend-mode: soft-light;
}
</style>
