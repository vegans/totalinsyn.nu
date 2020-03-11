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
              Aktion
              <br class="hidden md:inline" />
              <span class="text-blue-600">{{ title }}</span>
            </h2>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
            >
              {{ text }}
            </p>
            <div
              class="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
            >
              <nuxt-link
                :to="url"
                type="submit"
                class="mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
              >
                Läs mer
              </nuxt-link>
            </div>
          </div>
          <div
            class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
          >
            <svg
              class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
              width="640"
              height="784"
              fill="none"
              viewBox="0 0 640 784"
            >
              <defs>
                <pattern
                  id="svg-pattern-squares-mobile"
                  x="118"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                y="72"
                width="640"
                height="640"
                class="text-gray-50"
                fill="currentColor"
              />
              <rect
                x="118"
                width="404"
                height="784"
                fill="url(#svg-pattern-squares-mobile)"
              />
            </svg>
            <div
              class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md"
            >
              <button
                class="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline"
              >
                <img class="w-full" :src="image" />
              </button>
            </div>
          </div>
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
    text: String
  }
}
</script>
