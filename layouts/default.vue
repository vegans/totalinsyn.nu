<template>
  <div>
    <b-navbar>
      <template slot="brand">
        <b-navbar-item :to="{ path: '/' }" tag="nuxt-link">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="nuxt-link" to="/motion">
          Motionen
        </b-navbar-item>
      </template>
    </b-navbar>

    <section class="main-content">
      <nuxt />
    </section>
  </div>
</template>
