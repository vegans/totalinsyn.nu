<template>
  <div class="column" data-testid="thumbnail">
    <a :href="require(`~/assets${image}.jpg?original`)">
      <img v-lazy="require(`~/assets${image}.jpg?resize&size=300`)" />
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
