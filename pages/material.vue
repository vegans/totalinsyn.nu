<template>
  <div>
    <div class="flex mb-4">
      <div class="mx-2 w-full md:w-1/2">
        <h2
          class="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-yellow-500 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl"
        >
          {{ page.title }}
        </h2>
        <p
          class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
        >
          <nuxt-content :document="page" />
        </p>
        <div class="mt-4 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
            <a
              rel="noopener"
              :href="page.googleDrive"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              Öppna Google Drive
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-2">
      <h3
        class="mt-1 mb-3 text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-5xl lg:text-4xl xl:text-5xl"
      >
        Inlägg
      </h3>
      <div class="flex flex-wrap">
        <material
          v-for="material in page.posts"
          :key="material"
          :url="material"
        />
      </div>
      <h3
        class="mt-1 mb-3 text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-5xl lg:text-4xl xl:text-5xl"
      >
        Stories
      </h3>
      <div class="flex flex-wrap">
        <material
          v-for="material in page.stories"
          :key="material"
          :url="material"
          class="xl:w-1/6"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, route }) {
    const page = await $content('material').fetch()
    return {
      page
    }
  }
}
</script>
