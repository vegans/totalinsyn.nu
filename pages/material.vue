<template>
  <div>
    <div class="flex mb-4">
      <div class="mx-2 w-full md:w-1/2">
        <h2
          class="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-yellow-500 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl"
        >
          Material
        </h2>
        <p
          class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
        >
          Sociala medier är en oerhört bra plattform att nå ut med vårt budskap.
          Vi har skapat lite färdiga bilder att sprida runt, både som inlägg och
          stories. Välkommen att använda fritt! Klicka på bilderna för att se
          dom i full storlek.
        </p>
      </div>
    </div>
    <div class="mx-2">
      <h3
        class="mt-1 mb-3 text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-5xl lg:text-4xl xl:text-5xl"
      >
        Inlägg
      </h3>
      <div class="flex flex-wrap">
        <material url="/material/djurvalfard1.jpg" />
        <material url="/material/djurvalfard2.jpg" />
        <material url="/material/djurvalfard3.jpg" />
        <material url="/material/namninsamling.jpg" />
        <material url="/material/stangdadorrar.jpg" />
      </div>
      <h3
        class="mt-1 mb-3 text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-5xl lg:text-4xl xl:text-5xl"
      >
        Stories
      </h3>
      <div class="flex flex-wrap">
        <material url="/material/story1.jpg" class="xl:w-1/6" />
        <material url="/material/story2.jpg" class="xl:w-1/6" />
        <material url="/material/story3.jpg" class="xl:w-1/6" />
        <material url="/material/story4.jpg" class="xl:w-1/6" />
        <material url="/material/story5.jpg" class="xl:w-1/6" />
        <material url="/material/story6.jpg" class="xl:w-1/6" />
      </div>
    </div>
  </div>
</template>

<script>
import Material from '~/components/Material'

export default {
  components: {
    Material
  }
}
</script>
