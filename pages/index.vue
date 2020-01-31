<template>
  <div>
    <div class="card">
      <div class="card-content">
        <p class="title">
          Vi kräver total insyn på varenda gård och slakteri i Sverige.
        </p>
        <p class="subtitle">
          #totalinsyn
        </p>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <span>
            <nuxt-link to="/motion">Vår motion i riksdagen</nuxt-link>
          </span>
        </p>
        <p class="card-footer-item">
          <span
            ><a rel="noopener" href="https://www.facebook.com/totalinsyn"
              >Facebook</a
            >
          </span>
        </p>
      </footer>
    </div>

    <section @click="goto('/02')" class="hero is-medium is-dark totalinsyn2">
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
    <section @click="goto('/01')" class="hero is-medium is-dark totalinsyn1">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Total Insyn #01
          </h1>
          <h2 class="subtitle">
            Katrineholm - 2 oktober, 2019
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    goto(path) {
      this.$router.push({
        path
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  background-size: cover;
  cursor: pointer;
  background-color: #828282;
  background-blend-mode: soft-light;
}
.totalinsyn1 {
  background-image: url('/01/hero.jpg');
}
.totalinsyn2 {
  background-image: url('/02/hero.jpg');
}
.card {
  max-width: 500px;
  margin: 10px auto;
}
</style>
