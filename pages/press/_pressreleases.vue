<template>
  <div>
    <press-release
      :prefix="page.press.prefix"
      :sub="page.press.subtitle"
      :title="page.press.title"
    >
      <nuxt-content :document="page" />
    </press-release>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, route }) {
    const page = await $content(`press/${route.params.pressreleases}`).fetch()
    return {
      page
    }
  }
}
</script>
