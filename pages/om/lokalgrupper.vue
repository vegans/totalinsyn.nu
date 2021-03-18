<template>
  <div>
    <div class="mx-auto py-8 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-16">
      <div class="space-y-12">
        <div
          class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
        >
          <h2
            class="text-3xl font-extrabold text-black tracking-tight sm:text-4xl"
          >
            {{ page.title }}
          </h2>
          <p class="text-xl text-gray-700 md:max-w-lg">
            <nuxt-content :document="page" />
          </p>
        </div>
        <ul
          class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
        >
          <li
            v-for="group in groups"
            :key="group.slug"
            class="pb-10 bg-gray-200 text-center rounded-lg shadow-2xl xl:text-left"
            classOrg="py-10 px-6 bg-gray-200 text-center rounded-lg shadow-2xl xl:px-10 xl:text-left"
          >
            <div class="space-y-6 xl:space-y-10">
              <div class="aspect-w-3 aspect-h-2">
                <img
                  class="mx-auto w-full object-cover rounded-t-lg"
                  classOrg="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                  :src="
                    require(`~/assets/lokalgrupper/${group.slug}.jpg?resize&size=600`)
                  "
                  alt=""
                />
              </div>
              <div
                class="space-y-2 xl:flex xl:items-center xl:justify-between px-4 max-w-7xl sm:px-6 lg:px-8"
              >
                <div class="font-medium text-lg leading-6 space-y-1">
                  <h3 class="text-black">{{ group.namn }}</h3>
                  <p class="text-blue-700">{{ group.kontaktperson }}</p>
                </div>

                <ul class="flex justify-center space-x-5">
                  <li>
                    <a
                      :href="group.facebook"
                      target="_blank"
                      class="text-gray-600 hover:text-blue-500"
                    >
                      <span class="sr-only">Facebook</span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        aria-hidden="true"
                      >
                        <path
                          d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <!-- More items... -->
        </ul>
      </div>
    </div>

    <div class="bg-blue-500 mt-4 sm:-mx-6 lg:-mx-8">
      <div
        class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8"
      >
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          <span class="block">Ingen lokalgrupp nära dig?</span>
          <span class="block">Börja organisera idag!</span>
        </h2>
        <p class="mt-4 text-lg leading-6 text-blue-200">
          Vi söker alltid eldsjälar som vill organisera på sin lokala ort.
          Kontakta oss idag om du är intresserad!
        </p>
        <nuxt-link
          to="/kontakt"
          class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-500 bg-white hover:bg-blue-50 sm:w-auto"
        >
          Kontakta oss
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('pages/om/lokalgrupper').fetch()
    const groups = await $content('lokalgrupper')
      .sortBy('order', 'asc')
      .fetch()
    return {
      page,
      groups
    }
  }
}
</script>
