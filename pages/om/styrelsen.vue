<template>
  <div class="bg-white">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div class="space-y-5 sm:space-y-4">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {{ page.title }}
          </h2>
          <p class="text-xl text-gray-500"><nuxt-content :document="page" /></p>
        </div>
        <div class="lg:col-span-2">
          <ul
            class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
          >
            <li v-for="member in boardMembers" :key="member.slug">
              <div class="space-y-4">
                <div class="aspect-w-1 aspect-h-1">
                  <img
                    class="object-cover shadow-lg rounded-full"
                    :src="
                      require(`~/assets/styrelsen/${member.slug}.jpg?resize&size=600`)
                    "
                    :alt="member.name"
                  />
                </div>
                <div class="text-lg leading-6 font-medium space-y-1">
                  <h3>{{ member.name }}</h3>
                  <p class="text-yellow-600">{{ member.role }}</p>
                </div>
                <div class="text-lg">
                  <p class="text-gray-500">
                    <nuxt-content :document="member" />
                  </p>
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
    const boardMembers = await $content('styrelsen')
      .sortBy('order', 'asc')
      .fetch()
    const page = await $content('pages/om/styrelsen').fetch()
    return {
      page,
      boardMembers
    }
  }
}
</script>
