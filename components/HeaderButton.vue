<template>
  <button
    aria-label="Open submenu"
    type="button"
    class="group inline-flex items-center space-x-2 text-base leading-6 font-medium focus:outline-none transition ease-in-out duration-150"
    :class="
      dark
        ? 'underline text-black hover:text-gray-900 focus:text-gray-900'
        : 'text-blue-200 hover:text-white focus:text-white'
    "
  >
    <span><slot /></span>
    <!-- Item active: "text-gray-600", Item inactive: "text-gray-400" -->
    <svg
      class="h-5 w-5 transition ease-in-out duration-150"
      :class="
        dark
          ? 'text-black group-hover:text-gray-900 group-focus:text-gray-900'
          : 'text-blue-200 group-hover:text-white group-focus:text-white'
      "
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>
