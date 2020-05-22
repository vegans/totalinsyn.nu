<template>
  <div
    class="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10"
  >
    <div>
      <nuxt-link to="/" class="flex">
        <img
          class="h-8 w-auto sm:h-10"
          :src="dark ? '/logo-black.png' : '/logo-white.png'"
          alt="Workflow"
        />
      </nuxt-link>
    </div>
    <div class="-mr-2 -my-2 md:hidden">
      <mobile-menu-button :dark="dark" @click.native="mobileOpen = true" />
    </div>
    <div
      class="hidden md:flex-1 md:flex md:items-center md:justify-between md:space-x-12"
    >
      <nav class="flex space-x-10">
        <div class="relative">
          <header-button
            :dark="dark"
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
              class="z-50 absolute -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl"
            >
              <div class="rounded-lg shadow-lg">
                <div class="rounded-lg shadow-xs overflow-hidden">
                  <div
                    class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2"
                  >
                    <HeaderActionLink
                      to="/04"
                      text="På småtimmarna natten till söndagen besökte aktivister i Kampanjen Total
      insyn en av regionens största äggproducenter."
                    >
                      Total Insyn #04
                    </HeaderActionLink>
                    <HeaderActionLink
                      to="/03"
                      text="Aktivister från kampanjen #totalinsyn sände direkt från sju olika
      grisfabriker natten till idag."
                    >
                      Total Insyn #03
                    </HeaderActionLink>
                    <HeaderActionLink
                      to="/02"
                      text="Omkring 25 aktivister gick in på en gård utanför Kristianstad för att
      dokumentera grisarnas levnadsförhållanden."
                    >
                      Total Insyn #02
                    </HeaderActionLink>
                    <HeaderActionLink
                      to="/01"
                      text="Vår första aktion under #totalinsyn. Omkring 15 aktivister gick in på en
      kycklingfarm i Katrineholm för att dokumentera hur djuren lever."
                    >
                      Total Insyn #01
                    </HeaderActionLink>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <header-link to="/material" :dark="dark">
          Material
        </header-link>

        <div class="relative">
          <header-button
            :dark="dark"
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
              class="z-50 absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0"
            >
              <div class="rounded-lg shadow-lg">
                <div class="rounded-lg shadow-xs overflow-hidden">
                  <div
                    class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                  >
                    <HeaderMoreLink
                      data-testid="link-motion"
                      to="/motion"
                      text="Vår motion till riksdagen"
                    >
                      Motionen
                    </HeaderMoreLink>
                    <HeaderMoreLink
                      to="/lansstyrelsen"
                      text="Hur myten om världens bästa djurskydd upprätthålls"
                    >
                      Djurskyddet
                    </HeaderMoreLink>
                    <HeaderMoreLink
                      to="/om"
                      text="Vad är egentligen Total Insyn?"
                    >
                      Om Total Insyn
                    </HeaderMoreLink>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </nav>
      <div v-if="!dark" class="flex items-center space-x-8">
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
    <mobile-menu v-model="mobileOpen" />
  </div>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: false
    }
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
