<template>
  <nuxt-link
    :to="to"
    class="text-base leading-6 font-medium focus:outline-none transition ease-in-out duration-150"
    :class="
      dark
        ? 'underline text-black hover:text-gray-900 focus:text-gray-900'
        : 'text-blue-200 hover:text-white focus:text-white'
    "
    @click.native="close()"
  >
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: String,
    dark: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$bus.$emit('close')
    }
  }
}
</script>
