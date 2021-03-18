<template>
  <div>
    Dummy template

    <div class="bg-blue-500 sm:-mx-6 lg:-mx-8">
      <div
        class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8"
      >
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          <span class="block">Ingen lokalgrupp nära dig?</span>
          <span class="block">Börja organisera idag!</span>
        </h2>
        <p class="mt-4 text-lg leading-6 text-blue-200">
          Vi söker alltid eldsjälar som vill organisera på sin lokala ort.
          Kontakta oss idag om du är intresserad!
        </p>
        <nuxt-link
          to="/kontakt"
          class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-500 bg-white hover:bg-blue-50 sm:w-auto"
        >
          Kontakta oss
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
