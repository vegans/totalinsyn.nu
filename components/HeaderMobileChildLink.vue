<template>
  <nuxt-link
    :to="to"
    class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
    @click.native="close()"
  >
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: String,
    text: Boolean
  },
  methods: {
    close() {
      this.$bus.$emit('close')
    }
  }
}
</script>
