<template>
  <article class="panel is-primary">
    <b-tabs v-model="activeTab" position="is-centered" size="is-small">
      <b-tab-item label="Press">
        <a
          v-for="item in press"
          :key="item.url"
          :href="item.url"
          rel="noopener"
          class="panel-block"
        >
          {{ item.name }}
        </a>
      </b-tab-item>

      <b-tab-item label="Livestream">
        <a
          v-for="item in livestream"
          :key="item.url"
          :href="item.url"
          rel="noopener"
          class="panel-block"
        >
          {{ item.name }}
        </a>
      </b-tab-item>
    </b-tabs>
  </article>
</template>

<script>
export default {
  props: {
    press: Array,
    livestream: Array
  },
  data() {
    return {
      activeTab: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.panel {
  max-width: 500px;
  margin: 20px auto;
}
</style>
