<template>
  <p class="divider font-extrabold text-gray-500"><slot /></p>
</template>

<script>
export default {
  props: {
    italic: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.divider {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  margin: 10px 1em;
}
.divider.italic {
  font-style: italic;
}
.divider::before {
  content: '';
  height: 1px;
  background: rgb(107, 114, 128);
  flex: 1;
  margin: 0 0.25em 0 0;
}
.divider::after {
  content: '';
  height: 1px;
  background: rgb(107, 114, 128);
  flex: 1;
  margin: 0 0 0 0.25em;
}
.divider.italic::before,
.divider.italic::after {
  transform: skew(-18deg);
}
</style>
