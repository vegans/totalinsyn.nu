<template>
  <div>
    <div class="relative bg-blue-500">
      <div
        class="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10"
      >
        <div>
          <nuxt-link to="/" class="flex">
            <img
              class="h-8 w-auto sm:h-10"
              src="/logo-white.png"
              alt="Workflow"
            />
          </nuxt-link>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <mobile-menu @click.native="mobileOpen = true" />
        </div>
        <div
          class="hidden md:flex-1 md:flex md:items-center md:justify-between md:space-x-12"
        >
          <nav class="flex space-x-10">
            <div class="relative">
              <header-button
                data-testid="actions-menu"
                @click.native="isOpen = !isOpen"
              >
                Aktionerna
              </header-button>
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
              >
                <div
                  v-show="isOpen"
                  class="absolute -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl"
                >
                  <div class="rounded-lg shadow-lg">
                    <div class="rounded-lg shadow-xs overflow-hidden">
                      <div
                        class="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2"
                      >
                        <action-link
                          to="/04"
                          text="På småtimmarna natten till söndagen besökte aktivister i Kampanjen Total
      insyn en av regionens största äggproducenter."
                        >
                          Total Insyn #04
                        </action-link>
                        <action-link
                          to="/03"
                          text="Aktivister från kampanjen #totalinsyn sände direkt från sju olika
      grisfabriker natten till idag."
                        >
                          Total Insyn #03
                        </action-link>
                        <action-link
                          to="/02"
                          text="Omkring 25 aktivister gick in på en gård utanför Kristianstad för att
      dokumentera grisarnas levnadsförhållanden."
                        >
                          Total Insyn #02
                        </action-link>
                        <action-link
                          to="/01"
                          text="Vår första aktion under #totalinsyn. Omkring 15 aktivister gick in på en
      kycklingfarm i Katrineholm för att dokumentera hur djuren lever."
                        >
                          Total Insyn #01
                        </action-link>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
            <nuxt-link
              to="/material"
              class="text-base leading-6 font-medium text-blue-200 hover:text-white focus:outline-none focus:text-white transition ease-in-out duration-150"
            >
              Material
            </nuxt-link>

            <div class="relative">
              <header-button
                data-testid="more-menu"
                @click.native="isOpenMore = !isOpenMore"
              >
                Mer
              </header-button>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
              >
                <div
                  v-show="isOpenMore"
                  class="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0"
                >
                  <div class="rounded-lg shadow-lg">
                    <div class="rounded-lg shadow-xs overflow-hidden">
                      <div
                        class="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                      >
                        <more-link
                          data-testid="link-motion"
                          to="/motion"
                          text="Vår motion till riksdagen"
                        >
                          Motionen
                        </more-link>
                        <more-link
                          to="/lansstyrelsen"
                          text="Hur myten om världens bästa djurskydd upprätthålls"
                        >
                          Djurskyddet
                        </more-link>
                        <more-link
                          to="/om"
                          text="Vad är egentligen Total Insyn?"
                        >
                          Om Total Insyn
                        </more-link>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </nav>
          <div class="flex items-center space-x-8">
            <div class="rounded-md shadow">
              <a
                rel="noopener"
                href="https://change.org/totalinsyn"
                class="w-full flex items-center justify-center px-4 py-1 border border-transparent text-base leading-6 rounded-md text-white bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-1 md:px-3"
              >
                Skriv under
              </a>
            </div>
          </div>
        </div>
      </div>

      <transition
        enter-active-class="duration-200 ease-out"
        enter-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-show="mobileOpen"
          class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div class="rounded-lg shadow-lg">
            <div
              class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50"
            >
              <div class="pt-5 pb-6 px-5 space-y-6">
                <div class="flex items-center justify-between">
                  <div>
                    <img
                      class="h-8 w-auto"
                      src="/logo-black.png"
                      alt="Workflow"
                    />
                  </div>
                  <div class="-mr-2">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      @click="mobileOpen = false"
                    >
                      <svg
                        class="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
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
import ActionLink from '~/components/HeaderActionLink'
import MoreLink from '~/components/HeaderMoreLink'
import HeaderButton from '~/components/HeaderButton'
import MobileLink from '~/components/HeaderMobileLink'
import MobileMenu from '~/components/MobileMenu'

export default {
  components: {
    ActionLink,
    MoreLink,
    HeaderButton,
    MobileLink,
    MobileMenu
  },
  data() {
    return {
      mobileOpen: false,
      isOpen: false,
      isOpenMore: false
    }
  },
  created() {
    this.$bus.$on('close', () => {
      this.mobileOpen = false
      this.isOpen = false
      this.isOpenMore = false
    })
  }
}
</script>

<style lang="scss" scoped>
.absolute {
  z-index: 50;
}
</style>
