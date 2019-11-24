<template>
  <section>
    <div class="is-divider" data-content="Video"></div>
    <figure class="image is-16by9">
      <iframe
        :src="url"
        class="has-ratio"
        width="640"
        height="360"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </figure>
  </section>
</template>

<script>
export default {
  props: {
    url: String
  }
}
</script>

<style lang="scss" scoped>
iframe {
  margin: 10px 0;
}
</style>
