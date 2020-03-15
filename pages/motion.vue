<template>
  <div>
    <ti-hero
      type="Vår motion till"
      title="Sveriges riksdag"
      subtitle="läsvärt"
      image="/calf.jpg"
    >
      För att förtydliga målet med vår kampanj har vi lämnat in en motion till
      Sveriges riksdag. Den lämnades in i september 2019. Läs den här nedanför!
    </ti-hero>
    <div class="content">
      <h3
        class="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10"
      >
        Konsumenters rätt till att erhålla produktinformation inom matsektorn
      </h3>
      <h4 class="mt-4 max-w-3xl text-xl leading-7 text-gray-500 pb-2">
        Motivering
      </h4>
      <p class="pb-4">
        I nuläget får inte privatpersoner reda på tillräckligt mycket
        information för att bilda sig en uppfattning om huruvida produkterna, så
        som mjölk- och köttprodukter, är något som de vill stödja med anledning
        av miljö- och djurhänsyn. Privatpersoner är inte välkomna att se in i
        byggnader där besättningsdjuren vistas. Varken i ladugårdar eller i
        slakterier. Då de inte på något sätt kan se hur den enskilda produkten
        har producerats får de heller inte någon chans att bilda sig en noggrann
        uppfattning om den enskilde produkten.
      </p>
      <p class="pb-4">
        Konsumenter borde ha rätt att få ut tydlig information om produktens
        ursprung. Detta innefattar var produkten har producerats och alla steg i
        hur den har producerats. Det vill säga hur födan till besättningsdjuren
        producerats och själva uppfödningen och slakten av besättningsdjuren.
        Även fast det finns regler och riktlinjer om hur besättningdjur ska och
        bör födas upp finns det vissa skillnader från gård till gård och
        slakteri till slakteri. Dessa skillnader utgörs av hur ladugårdarna är
        byggda, vilket foder de föds upp på, vilka rutiner de har, vilka redskap
        de använder och olika personlighetsdrag hos uppfödarna och skötarna på
        det olika gårdarna. Skillnaderna innefattar också annorlunda rutiner och
        redskap på olika slakterier och även skilda personlighetdrag hos
        personal på olika slakterier.
      </p>
      <p class="pb-4">
        Då skillnader mellan olika ladugårdar och slakterier kan påverka
        besättningsdjuren, som produkterna består av, bör konsumenten ha rätt
        till att ta del av hur djuren föds upp och slaktas på respektive
        ladugård och slakteri.
      </p>
      <p class="pb-4">
        För att konsumenten ska kunna ta ett ställningstagande om vilken
        produktion den vill bidra till måste den kunna erhålla tydlig
        information om själva produktionen. Detta kan lösas genom att
        privatpersoner ska få besöka ladugårdar och slakterier, med regler så
        att personal och djur inte störs i betydande utsträckning, och genom att
        införa lagar om att flera delar av produktionen ska spelas in och att
        konsumenter ska få ta del av dessa inspelningar, och genom att kunna ta
        del av vissa papper som visar information om vad för slags foder djuren
        har utfodrats med.
      </p>
      <h4 class="mt-4 max-w-3xl text-xl leading-7 text-gray-500 pb-2">
        Förslag till riksdagsbeslut
      </h4>
      <ul class="list-disc">
        <li class="pb-2">
          Riksdagen ställer sig bakom det som anförs i motionen om att
          konsumenten har rätt till att ta del av produktionen hos den enskilde
          produkten.
        </li>
        <li class="pb-2">
          Riksdagen ställer sig bakom det som anförs i motionen om att införa
          krav på videoinspelning i ladugårdar, transporter av djur och
          slakterier.
        </li>
        <li class="pb-2">
          Riksdagen ställer sig bakom det som anförs i motionen om att
          privatpersoner, i viss mån, ska få besöka ladugårdar och slakterier.
        </li>
        <li class="pb-2">
          Riksdagen ställer sig bakom det som anförs i motionen om att
          konsumenter har rätt till att ta del av information om hur
          besättningsdjurens foder, hos olika ladugårdar, har producerats.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Action from '~/mixins/Action.js'

export default {
  mixins: [Action],
  data() {
    return {
      action: 'Motionen',
      url: 'https://totalinsyn.nu/motion',
      title: 'Motionen'
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  max-width: 600px;
  margin: 0 auto;
  padding: 10px;
}
</style>
