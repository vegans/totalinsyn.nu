<template>
  <div>
    <div class="relative bg-blue-500">
      <Navbar />
    </div>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <nuxt />
      </div>
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
img[lazy='loading'] {
  filter: blur(15px);
}
</style>
