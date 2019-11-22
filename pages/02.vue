<template>
  <div>
    <section class="hero is-medium is-primary totalinsyn1">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Total Insyn #02
          </h1>
          <h2 class="subtitle">
            Kristianstad - 20 november, 2019
          </h2>
        </div>
      </div>
    </section>
    <section>
      <div class="card">
        <div class="card-content">
          <div class="content">
            <div v-html="content"></div>
          </div>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <span>
              <a
                href="https://drive.google.com/drive/folders/1arQkgvgKHJX9yX5kCtaPylgxqpOORJEz"
                target="_blank"
                rel="noopener"
                >Alla bilder</a
              >
            </span>
          </p>
        </footer>
      </div>
    </section>
    <section>
      <div class="columns">
        <div class="column">
          No gap
        </div>
        <div class="column">
          No gap
        </div>
        <div class="column">
          No gap
        </div>
        <div class="column">
          No gap
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import content from '~/content/02.md'
export default {
  computed: {
    content() {
      return content
    }
  }
}
</script>

<style lang="scss">
.card {
  max-width: 500px;
  margin: 10px auto;
}
.hero {
  background-size: cover;
  cursor: pointer;
  background-image: url('/totalinsyn2.jpg');
}
</style>
