<template>
  <div class="relative bg-white overflow-hidden">
    <div class="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
      <div
        class="mt-4 mx-auto max-w-screen-xl px-4 sm:mt-6 sm:px-6 md:mt-10 xl:mt-12"
      >
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div
            class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
          >
            <div
              class="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base"
            >
              {{ subtitle }}
            </div>
            <h2
              class="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl"
            >
              {{ type }}
              <br />
              <span class="text-yellow-500">{{ title }}</span>
            </h2>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
            >
              <slot />
            </p>
            <template v-if="full">
              <div
                v-if="url"
                class="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
              >
                <nuxt-link
                  :to="url"
                  class="mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Läs mer
                </nuxt-link>
              </div>
            </template>
            <template v-else-if="imageUrl">
              <div
                class="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
              >
                <a
                  :href="imageUrl"
                  class="mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Se alla bilder
                </a>
              </div>
            </template>
          </div>
          <hero-image :full="full" :image="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    subtitle: String,
    url: String,
    imageUrl: String,
    type: {
      type: String,
      default: 'Aktion'
    },
    full: {
      type: Boolean,
      default: true
    }
  }
}
</script>
