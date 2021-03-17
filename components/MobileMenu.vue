<template>
  <transition
    enter-active-class="duration-200 ease-out"
    enter-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="duration-100 ease-in"
    leave-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div
      v-show="value"
      class="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
    >
      <div class="rounded-lg shadow-lg">
        <div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5 space-y-6">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="/logo-black.png" alt="Workflow" />
              </div>
              <div class="flex-grow">
                <h2
                  class="mt-1 ml-4 text-2xl tracking-tight font-extrabold text-yellow-500 sm:leading-none"
                >
                  Total Insyn
                </h2>
              </div>
              <div class="-mr-2">
                <MobileMenuClose @click.native="$emit('input', false)" />
              </div>
            </div>
          </div>
          <div>
            <template v-for="page in pages">
              <div
                v-if="page.children"
                :key="page.url"
                class="py-6 px-5 space-y-1"
              >
                <p class="mt-2 max-w-4xl text-sm text-gray-500">
                  {{ page.title }}
                </p>
                <div class="grid grid-cols-2 gap-4">
                  <HeaderMobileChildLink
                    v-for="child in page.children"
                    :key="child.url"
                    :to="child.url"
                  >
                    {{ child.title }}
                  </HeaderMobileChildLink>
                </div>
              </div>
              <div v-else :key="page.url" class="py-3 px-5 space-y-1">
                <HeaderActionLink :to="page.url">
                  {{ page.title }}
                </HeaderActionLink>
              </div>
            </template>
          </div>
          <div class="space-y-6 py-6 px-5">
            <div class="rounded-md shadow">
              <a
                rel="noopener"
                href="https://change.org/totalinsyn"
                class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 rounded-md text-white bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-1 md:px-3"
              >
                Skriv under
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    value: Boolean
  },
  computed: mapState({
    pages: 'pages'
  })
}
</script>
