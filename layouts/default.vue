<template>
  <div>
    <b-navbar>
      <template slot="brand">
        <b-navbar-item :to="{ path: '/' }" tag="nuxt-link">
          Total Insyn
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="nuxt-link" to="/01">
          #01
        </b-navbar-item>
        <b-navbar-item tag="nuxt-link" to="/02">
          #02
        </b-navbar-item>
        <b-navbar-item tag="nuxt-link" to="/motion">
          Motionen
        </b-navbar-item>
        <b-navbar-item tag="nuxt-link" to="/lansstyrelsen">
          Myten om djurskyddet
        </b-navbar-item>
      </template>
    </b-navbar>

    <section class="main-content">
      <nuxt />
    </section>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>#totalinsyn</strong> is a campaign for total transparancy into
          every single farm and every single slaughterhouse in Sweden.
        </p>
      </div>
    </footer>
  </div>
</template>

<style lang="sass">
@import 'bulma';
@import "~bulma-extensions/bulma-divider/src/sass/index.sass"
</style>

<style lang="scss">
.footer .content {
  max-width: 500px;
  margin: 0 auto;
}
</style>
