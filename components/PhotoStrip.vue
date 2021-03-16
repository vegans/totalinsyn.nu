<template>
  <div>
    <Divider>{{ title }}</Divider>
    <div class="flex-row">
      <div class="flex-col">
        <photo-strip-image :image="images[0]" />
      </div>
      <div class="flex-col">
        <photo-strip-image :image="images[1]" />
      </div>
      <div class="flex-col">
        <photo-strip-image :image="images[2]" />
      </div>
      <div class="flex-col">
        <photo-strip-image :image="images[3]" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: Array,
    title: String
  }
}
</script>

<style lang="scss" scoped>
.flex-row {
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
}

.flex-col {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
  color: white;
  box-sizing: border-box;
}

@media (max-width: 767px) {
  .flex-col {
    flex-basis: calc(50% - 12px);
  }
}
</style>
