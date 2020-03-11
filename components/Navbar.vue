<template>
  <nav class="bg-blue-700">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            @click="toggle()"
          >
            <svg
              class="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                :class="{ hidden: open, 'inline-flex': !open }"
                class="inline-flex"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                :class="{ hidden: !open, 'inline-flex': open }"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0">
            <nuxt-link to="/">
              <img
                class="block lg:hidden h-8 w-auto"
                src="/logo-white.png"
                alt=""
              />
              <img
                class="hidden lg:block h-8 w-auto"
                src="/logo-white.png"
                alt=""
              />
            </nuxt-link>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex">
              <slot />
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <div class="rounded-md shadow">
            <a
              rel="noopener"
              href="https://change.org/totalinsyn"
              class="w-full flex items-center justify-center px-4 py-1 border border-transparent text-base leading-6 rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-1 md:px-3"
            >
              Skriv under
            </a>
          </div>
        </div>
      </div>
    </div>
    <div :class="{ block: open, hidden: !open }" class="sm:hidden">
      <div class="px-2 pt-2 pb-3">
        <slot name="mobile" />
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: mapState({
    open: (state) => state.nav.open
  }),
  methods: mapMutations({
    toggle: 'nav/toggle'
  })
}
</script>
