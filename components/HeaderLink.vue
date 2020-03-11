<template>
  <nuxt-link
    :to="to"
    :class="[{ block: mobile }, classes]"
    active-class="text-white bg-blue-800"
    @click.native="close()"
  >
    <slot />
  </nuxt-link>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    to: String,
    homepage: Boolean,
    mobile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      if (this.homepage) {
        return 'ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out'
      }
      return 'ml-4 px-3 py-2 rounded-md text-sm font-medium text-blue-200 hover:text-white hover:bg-blue-600 focus:outline-none focus:text-white focus:bg-blue-600'
    }
  },
  methods: mapMutations({
    close: 'nav/close'
  })
}
</script>
