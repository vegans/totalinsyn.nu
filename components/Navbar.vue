<template>
  <div
    class="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10"
    :class="{
      'mx-auto': !dark,
      'max-w-screen-xl': !dark
    }"
  >
    <div>
      <nuxt-link to="/" class="flex">
        <img
          class="h-8 w-8 sm:h-10 sm:w-10"
          :src="dark ? '/logo-black.png' : '/logo-white.png'"
          alt="Total Insyn logo"
        />
      </nuxt-link>
    </div>
    <div class="flex-grow md:hidden">
      <h2
        class="ml-4 text-2xl tracking-tight font-extrabold text-yellow-500 sm:leading-none"
      >
        Total Insyn
      </h2>
    </div>
    <div class="-mr-2 -my-2 md:hidden">
      <mobile-menu-button :dark="dark" @click.native="mobileOpen = true" />
    </div>
    <div
      class="hidden md:flex-1 md:flex md:items-center md:justify-between md:space-x-12"
    >
      <nav class="flex space-x-10">
        <template v-for="page in pages">
          <div v-if="page.children" :key="page.url" class="relative">
            <header-button
              :dark="dark"
              data-testid="about-menu"
              @click.native="toggleMenu"
            >
              {{ page.title }}
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
                class="z-50 absolute -ml-4 mt-3 transform w-screen max-w-xs"
              >
                <div v-click-outside="closeMenu" class="rounded-lg shadow-lg">
                  <div class="rounded-lg shadow-xs overflow-hidden">
                    <div
                      class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                    >
                      <HeaderMoreLink
                        v-for="child in page.children"
                        :key="child.url"
                        :to="child.url"
                        :text="child.subtitle"
                      >
                        {{ child.title }}
                      </HeaderMoreLink>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
          <header-link v-else :key="page.url" :to="page.url" :dark="dark">
            {{ page.title }}
          </header-link>
        </template>
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
import { mapState } from 'vuex'
import ClickOutside from 'vue-click-outside'

export default {
  directives: {
    ClickOutside
  },
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      mobileOpen: false,
      isOpen: false
    }
  },
  computed: mapState({
    pages: 'pages'
  }),
  created() {
    this.$bus.$on('close', () => {
      this.mobileOpen = false
      this.isOpen = false
    })
  },
  methods: {
    closeMenu() {
      if (this.isOpen) {
        this.isOpen = false
      }
    },
    toggleMenu(event) {
      event.stopPropagation()
      this.isOpen = !this.isOpen
    }
  }
}
</script>
