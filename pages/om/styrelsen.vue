<template>
  <div class="bg-white">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div class="space-y-5 sm:space-y-4">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {{ page.title }}
          </h2>
          <p class="text-xl text-gray-500">
            <!-- TODO: Markdown -->
            {{ page.body }}
          </p>
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
                    :src="member.image"
                    :alt="member.name"
                  />
                </div>
                <div class="text-lg leading-6 font-medium space-y-1">
                  <h3>{{ member.name }}</h3>
                  <p class="text-yellow-600">{{ member.role }}</p>
                </div>
                <div class="text-lg relative italic text-gray-500 font-serif">
                  <div class="stylistic-quote-mark" aria-hidden="true">
                    &ldquo;
                  </div>
                  <!-- TODO: Markdown this -->
                  <p class="test">{{ member.quote }}</p>
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
  async asyncData({ $contentful }) {
    const res = await $contentful.getEntries({
      content_type: 'styrelsen'
    })
    const boardMembers = res.items.map((item) => ({
      name: item.fields.name,
      role: item.fields.role,
      quote: item.fields.quote,
      image: item.fields.image.fields.file.url
    }))
    // TODO: SORT!!!
    const page = await $contentful.getPage('om/styrelsen')
    return {
      page,
      boardMembers
    }
  }
}
</script>

<style lang="postcss" scoped>
.stylistic-quote-mark {
  font-size: 5rem;
  right: 95%;
  top: -0.25rem;
  @apply mr-2 hidden font-serif text-gray-200 absolute leading-none;
}

@screen sm {
  .stylistic-quote-mark {
    @apply block;
  }
}
</style>
