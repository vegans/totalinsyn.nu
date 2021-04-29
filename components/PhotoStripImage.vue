<template>
  <div class="column" data-testid="thumbnail">
    <a :href="image">
      <img v-lazy="image" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    image: String
  }
}
</script>
