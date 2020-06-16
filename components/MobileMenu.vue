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
              <div class="-mr-2">
                <MobileMenuClose @click.native="$emit('input', false)" />
              </div>
            </div>
            <div>
              <nav class="grid gap-6">
                <HeaderActionLink
                  v-for="action in actions"
                  :key="action.slug"
                  :to="`/${action.slug}`"
                >
                  {{ action.title }}
                </HeaderActionLink>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-4">
              <HeaderMobileLink to="/om">Om Total Insyn</HeaderMobileLink>
              <HeaderMobileLink to="/motion">Motionen</HeaderMobileLink>
              <HeaderMobileLink to="/lansstyrelsen">
                Djurskyddet
              </HeaderMobileLink>
              <HeaderMobileLink to="/material">Material</HeaderMobileLink>
            </div>
            <div class="space-y-6">
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
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    value: Boolean,
    actions: Array
  }
}
</script>
