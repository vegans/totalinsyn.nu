<template>
  <a :href="url" class="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
    <img class="image px-1" :src="url" />
  </a>
</template>

<script>
export default {
  props: {
    url: String
  }
}
</script>
