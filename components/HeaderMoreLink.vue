<template>
  <nuxt-link
    :to="to"
    class="-m-3 p-3 block space-y-1 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
    @click.native="close()"
  >
    <p class="text-base leading-6 font-medium text-gray-900">
      <slot />
    </p>
    <p class="text-sm leading-5 text-gray-500">
      {{ text }}
    </p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: String,
    text: String
  },
  methods: {
    close() {
      this.$bus.$emit('close')
    }
  }
}
</script>
