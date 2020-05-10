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
      class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
    >
      <div class="rounded-lg shadow-lg">
        <div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5 space-y-6">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="/logo-black.png" alt="Workflow" />
              </div>
              <div class="-mr-2">
                <close-button @click.native="$emit('input', false)" />
              </div>
            </div>
            <div>
              <nav class="grid gap-6">
                <action-link to="/04">
                  Total Insyn #04
                </action-link>
                <action-link to="/03">
                  Total Insyn #03
                </action-link>
                <action-link to="/02">
                  Total Insyn #02
                </action-link>
                <action-link to="/01">
                  Total Insyn #01
                </action-link>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-4">
              <mobile-link to="/om">Om Total Insyn</mobile-link>
              <mobile-link to="/motion">Motionen</mobile-link>
              <mobile-link to="/lansstyrelsen">Djurskyddet</mobile-link>
              <mobile-link to="/material">Material</mobile-link>
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
import ActionLink from '~/components/HeaderActionLink'
import MobileLink from '~/components/HeaderMobileLink'
import CloseButton from '~/components/MobileMenuClose'

export default {
  components: {
    ActionLink,
    MobileLink,
    CloseButton
  },
  props: {
    value: Boolean
  }
}
</script>
