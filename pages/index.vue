<template>
  <div>
    <div class="relative bg-white overflow-hidden">
      <div class="max-w-screen-xl mx-auto ">
        <div
          class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        >
          <div class="pt-6 px-4 sm:px-6 lg:px-8">
            <nav
              class="relative flex items-center justify-between sm:h-10 lg:justify-start"
            >
              <div
                class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
              >
                <div class="flex items-center justify-between w-full md:w-auto">
                  <img
                    class="h-8 w-auto sm:h-10"
                    alt="Logo"
                    src="/logo-black.png"
                  />
                </div>
              </div>
              <div class="block md:ml-10 md:pr-4">
                <header-link to="/01" :homepage="true">#01</header-link>
                <header-link to="/02" :homepage="true">#02</header-link>
                <header-link to="/03" :homepage="true">#03</header-link>
                <header-link to="/04" :homepage="true">#04</header-link>
                <header-link
                  to="/motion"
                  class="hidden md:inline"
                  :homepage="true"
                >
                  Motionen
                </header-link>
                <header-link to="/om" :homepage="true">Läs mer</header-link>
              </div>
            </nav>
          </div>

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
                Total insyn-kampanjen startades för att vi anser att varje
                enskild person har rätt att kräva total insyn på alla gårdar,
                slakterier och andra företag som utnyttjar djur för ekonomisk
                vinning i Sverige. I nuläget har privatpersoner inte möjlighet
                att få tillräckligt mycket information för att bilda sig en
                realistisk uppfattning om huruvida produkter, så som ägg-,
                mjölk- och köttprodukter, är något som de vill stödja med tanke
                på hur produktionskedjan ser ut och vad djuren behöver genomgå i
                den.
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
          :src="require(`~/assets/homepage.jpg`)"
          alt=""
        />
      </div>
    </div>
    <ti-hero
      title="Total Insyn #04"
      subtitle="Sverige - 10 maj, 2020"
      image="/04/header.jpg"
      url="/04"
    >
      På småtimmarna natten till söndagen besökte aktivister i Kampanjen Total
      insyn en av regionens största äggproducenter.
    </ti-hero>
    <ti-hero
      title="Total Insyn #03"
      subtitle="Sverige - 26 april, 2020"
      image="/03/header.jpg"
      url="/03"
    >
      Aktivister från kampanjen #totalinsyn sände direkt från sju olika
      grisfabriker natten till idag.
    </ti-hero>
    <ti-hero
      title="Total Insyn #02"
      subtitle="Kristianstad - 20 november, 2019"
      image="/02/header.jpg"
      url="/02"
    >
      Omkring 25 aktivister gick in på en gård utanför Kristianstad för att
      dokumentera grisarnas levnadsförhållanden.
    </ti-hero>
    <ti-hero
      title="Total Insyn #01"
      subtitle="Katrineholm - 2 oktober, 2019"
      image="/01/header.jpg"
      url="/01"
    >
      Vår första aktion under #totalinsyn. Omkring 15 aktivister gick in på en
      kycklingfarm i Katrineholm för att dokumentera hur djuren lever.
    </ti-hero>
    <ti-footer />
  </div>
</template>

<script>
import HeaderLink from '~/components/HeaderLink'

export default {
  name: 'HomePage',
  layout: 'empty',
  transition: 'none',
  components: {
    HeaderLink
  }
}
</script>

<style lang="scss" scoped>
.hero {
  background-size: cover;
  cursor: pointer;
  background-color: #828282;
  background-blend-mode: soft-light;
}
.totalinsyn1 {
  background-image: url('/01/hero.jpg');
}
.totalinsyn2 {
  background-image: url('/02/hero.jpg');
}
.card {
  max-width: 500px;
  margin: 10px auto;
}
</style>
