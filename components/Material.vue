<template>
  <a
    :href="require(`~/assets${url}?original`)"
    class="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
  >
    <img v-lazy="require(`~/assets${url}?resize&size=300`)" class="px-2 py-2" />
  </a>
</template>

<script>
export default {
  props: {
    url: String
  }
}
</script>
