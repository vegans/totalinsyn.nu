<template>
  <div>
    <navbar>
      <template v-slot:mobile>
        <header-link :mobile="true" to="/01">#01</header-link>
        <header-link :mobile="true" to="/02">#02</header-link>
        <header-link :mobile="true" to="/motion">Motionen</header-link>
        <header-link :mobile="true" to="/lansstyrelsen">
          Myten om djurskyddet
        </header-link>
      </template>
      <header-link to="/01">#01</header-link>
      <header-link to="/02">#02</header-link>
      <header-link data-testid="link-motion" to="/motion">Motionen</header-link>
      <header-link to="/lansstyrelsen">
        Myten om djurskyddet
      </header-link>
    </navbar>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <nuxt />
      </div>
    </main>
    <ti-footer />
  </div>
</template>

<script>
import HeaderLink from '~/components/HeaderLink'
import Navbar from '~/components/Navbar'

export default {
  components: {
    HeaderLink,
    Navbar
  }
}
</script>
