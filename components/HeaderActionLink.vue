<template>
  <nuxt-link
    :to="to"
    class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
    :class="{ 'items-start': text }"
    @click.native="close()"
  >
    <div
      class="flex-shrink-0 flex items-center justify-center w-12 rounded-md text-white "
      :class="{ 'sm:w-15': text }"
    >
      <img v-lazy="require(`~/assets${to}/header.jpg?resize&size=300`)" />
    </div>
    <div v-if="text" class="space-y-1">
      <p class="text-base leading-6 font-medium text-gray-900">
        <slot />
      </p>
      <p class="text-sm leading-5 text-gray-500">
        {{ text }}
      </p>
    </div>
    <div v-else class="text-base leading-6 font-medium text-gray-900">
      <slot />
    </div>
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
