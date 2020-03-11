<template>
  <div>
    <nav class="bg-blue-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <nuxt-link to="/">
                <img class="h-8 w-8" src="/logo-white.png" alt="" />
              </nuxt-link>
            </div>
            <div class="block">
              <div class="ml-10 flex items-baseline">
                <header-link to="/01">#01</header-link>
                <header-link to="/02">#02</header-link>
                <header-link to="/motion">Motionen</header-link>
                <header-link to="/lansstyrelsen">
                  Myten om djurskyddet
                </header-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
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

export default {
  components: {
    HeaderLink
  },
  data() {
    return {
      open: false
    }
  }
}
</script>

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
