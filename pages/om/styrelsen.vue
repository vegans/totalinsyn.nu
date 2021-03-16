<template>
  <div>
    <div class="pb-5 border-b border-gray-200">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        {{ page.title }}
      </h3>
      <p class="mt-2 max-w-4xl text-sm text-gray-500">
        <nuxt-content :document="page" />
      </p>
    </div>
    <ul
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
    >
      <li
        v-for="member in boardMembers"
        :key="member.name"
        class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
      >
        <div class="flex-1 flex flex-col p-8">
          <img
            class="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
            alt=""
          />
          <h3 class="mt-6 text-gray-900 text-sm font-medium">
            {{ member.name }}
          </h3>
          <dl class="mt-1 flex-grow flex flex-col justify-between">
            <dt class="sr-only">Roll</dt>
            <dd class="text-gray-500 text-sm">{{ member.role }}</dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, route }) {
    const boardMembers = await $content('boardMembers')
      .only(['name', 'role'])
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
