<template>
  <div>
    <div class="bg-white">
      <div
        class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24"
      >
        <div class="space-y-12">
          <div
            class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl"
          >
            <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {{ page.title }}
            </h2>
            <p class="text-xl text-gray-500">
              <nuxt-content :document="page" />
            </p>
          </div>
          <ul
            class="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
          >
            <li v-for="member in boardMembers" :key="member.slug">
              <div class="space-y-6">
                <img
                  class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                  :src="
                    require(`~/assets/styrelsen/${member.slug}.jpg?resize&size=600`)
                  "
                  alt=""
                />
                <div class="space-y-2">
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3>{{ member.name }}</h3>
                    <p class="text-yellow-600">{{ member.role }}</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const boardMembers = await $content('boardMembers')
      .only(['slug', 'name', 'role'])
      .sortBy('order', 'asc')
      .fetch()
    const page = await $content('om/styrelsen').fetch()
    return {
      page,
      boardMembers
    }
  }
}
</script>
