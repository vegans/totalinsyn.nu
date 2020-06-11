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
          dom i full storlek. Se även vår Google Drive för mer material.
        </p>
        <div class="mt-4 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
            <a
              rel="noopener"
              href="https://drive.google.com/drive/u/1/folders/17A2cGJfRBV_z8D_aFGLk2PPBjlG63Iyw"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              Öppna Google Drive
            </a>
          </div>
        </div>
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
