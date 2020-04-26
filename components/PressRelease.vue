<template>
  <div class="wrapper px-1">
    <p class="text-xs text-gray-500">{{ sub }}</p>
    <h4
      class="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9"
    >
      <template v-if="prefix">Just nu: <br /></template>
      <span class="text-yellow-500">{{ title }}</span>
    </h4>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="mt-3 text-lg leading-7 text-gray-500" v-html="content"></div>
  </div>
</template>

<script>
export default {
  props: {
    imagesLink: String,
    content: null,
    title: String,
    sub: String,
    prefix: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 500px;
  margin: 10px auto;
}
</style>
