<template>
  <section>
    <div class="card">
      <div class="card-content">
        <div class="content">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-html="content"></div>
        </div>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <span>
            <a :href="imagesLink" target="_blank" rel="noopener">Alla bilder</a>
          </span>
        </p>
      </footer>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    imagesLink: String,
    content: null
  }
}
</script>

<style lang="scss" scoped>
.card {
  max-width: 500px;
  margin: 10px auto;
}
</style>
