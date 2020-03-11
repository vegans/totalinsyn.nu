<template>
  <section>
    <div class="is-divider" data-content="Video"></div>
    <figure class="video">
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
.video {
  padding-top: 56.25%;
  display: block;
  position: relative;
}
.has-ratio {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
</style>
