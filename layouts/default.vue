<template>
  <div>
    <div class="relative bg-blue-500">
      <div class="pt-6 px-4 sm:px-6 lg:px-8">
        <navbar />
      </div>
    </div>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <nuxt />
      </div>
    </main>
    <ti-footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>
