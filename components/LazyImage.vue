<template>
  <div
    v-lazy-container="{ selector: 'img' }"
    :class="`aspect-w-${width} aspect-h-${height}`"
  >
    <img
      :class="imageClass"
      :data-src="image.src"
      :data-srcset="image.srcSet"
      :data-loading="require(`~/assets/${asset}?lqip`)"
    />
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 9
    },
    width: {
      type: Number,
      default: 16
    },
    asset: {
      type: String,
      required: true
    },
    maxWidth: {
      type: Number,
      default: 1200
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const image = require(`~/assets/${this.asset}?resize&sizes[]=300&sizes[]=600&sizes[]=1000`)
    return { image }
  },
  computed: {
    imageClass() {
      if (this.rounded) {
        return 'rounded-lg shadow-lg'
      }
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
img[lazy='loading'] {
  filter: blur(15px);
}
img {
  object-fit: cover;
}
</style>
