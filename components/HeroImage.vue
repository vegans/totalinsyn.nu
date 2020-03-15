<template>
  <div
    class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
  >
    <svg
      class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
      width="640"
      height="784"
      fill="none"
      viewBox="0 0 640 784"
    >
      <defs>
        <pattern
          :id="id"
          x="118"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width="4"
            height="4"
            class="text-gray-200"
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect
        y="72"
        width="640"
        height="640"
        class="text-gray-50"
        fill="currentColor"
      />
      <rect x="118" width="404" height="784" :fill="`url(#${id})`" />
    </svg>
    <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
      <div
        class="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline"
      >
        <img
          class="w-full"
          :src="require(`~/assets${image}?resize&size=600`)"
          alt="Hero image"
          :image-style="full ? 'header' : 'headerSmall'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import uniqid from 'uniqid'

export default {
  props: {
    image: String,
    full: Boolean
  },
  computed: {
    id() {
      return uniqid()
    }
  }
}
</script>
