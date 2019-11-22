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
      </template>
    </b-navbar>

    <section class="main-content">
      <nuxt />
    </section>
  </div>
</template>
