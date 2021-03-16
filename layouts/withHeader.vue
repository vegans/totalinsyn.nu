<template>
  <div>
    <div class="relative bg-white overflow-hidden">
      <div class="max-w-screen-xl mx-auto ">
        <div
          class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        >
          <Navbar :dark="true" />
          <div
            class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div class="sm:text-center lg:text-left">
              <h2
                class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
              >
                Vi kräver
                <br class="xl:hidden" />
                <span class="text-yellow-500">total insyn</span>
              </h2>
              <p
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Vi anser att allmänhet och konsumenter har rätt att få veta vad
                som händer bakom stängda dörrar på gårdar, slakterier och andra
                verksamheter som för ekonomisk vinning utnyttjar djur. Idag har
                vi inte tillgång till den relevanta informationen som krävs för
                att bilda oss en realistisk uppfattning om hur ägg, mjölk, kött
                och andra animaliska produkter faktiskt produceras.
              </p>

              <p
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Idag förekommer också massiva reklamkampanjer, som till exempel
                Bregottfabriken - reklamkampanjer som inte visar sanningen och
                målar upp en falsk bild om hur bra djuren har det. Följ med oss
                bakom kulisserna på svenska gårdar och slakterier där vi visar
                sanningen och slår hål på myten kring världens bästa djurskydd.
              </p>

              <p
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Vi kräver Total Insyn.
              </p>
              <div
                class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div class="rounded-md shadow">
                  <a
                    rel="noopener"
                    href="https://change.org/totalinsyn"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Skriv under
                  </a>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    rel="noopener"
                    href="https://www.facebook.com/totalinsyn"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-yellow-800 bg-yellow-100 hover:text-yellow-700 hover:bg-yellow-200 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
          <svg
            class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          :src="require(`~/assets/homepage2.jpg`)"
          alt=""
        />
      </div>
    </div>
    <nuxt />
    <Footer />
  </div>
</template>
