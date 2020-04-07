<template>
  <div>
    <ti-hero
      type="Vad är"
      title="total insyn?"
      subtitle="läsvärt"
      image="/calf.jpg"
    >
      Total insyn-kampanjen startades för att vi anser att varje enskild person
      har rätt att kräva total insyn på alla gårdar, slakterier och andra
      företag som utnyttjar djur för ekonomisk vinning i Sverige.
    </ti-hero>
    <div class="content">
      <p class="pb-4">
        Total insyn-kampanjen startades för att vi anser att varje enskild
        person har rätt att kräva total insyn på alla gårdar, slakterier och
        andra företag som utnyttjar djur för ekonomisk vinning i Sverige. I
        nuläget har privatpersoner inte möjlighet att få tillräckligt mycket
        information för att bilda sig en realistisk uppfattning om huruvida
        produkter, så som ägg-, mjölk- och köttprodukter, är något som de vill
        stödja med tanke på hur produktionskedjan ser ut och vad djuren behöver
        genomgå i den. För att uppmärksamma kampanjen har aktioner och
        manifestationer utförts, motioner har skickats in till riksdagen och en
        namninsamling har startats.
      </p>

      <h3
        class="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10"
      >
        Varför behövs total insyn?
      </h3>
      <p class="pb-4">
        Total insyn behövs för att djuren inom produktionssektorn inte ska kunna
        exploateras bakom stängda dörrar och för att allmänheten ska ha
        möjligheten att få insyn i vad djuren utsätts för. Endast då kan vi göra
        medvetna val och avgöra om det är en process man anser rätt. Sverige
        anses ha några av de strängaste djurskyddslagarna i världen, men för att
        djuren i industrin ska skyddas så måste de också följas samt
        ifrågasättas. Myndigheternas resurser för att se till att
        djurskyddslagarna följs är inte stora och de är inte tillräckliga för
        att djuren på individnivå ska få möjlighet till att leva ett liv fritt
        från lidande.
      </p>

      <h3
        class="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10"
      >
        Vad innebär total insyn i praktiken?
      </h3>
      <p class="pb-4">
        Det innebär att information om vad djuren i industrin går igenom ska
        vara tillgänglig för allmänheten. Vem som helst ska kunna få möjligheten
        att se vad som händer djuren och hela händelseförloppet från födsel till
        att deras liv avslutas i slakteriet. Detta ska tillhandahållas av
        oberoende parter utan vinstintresse.
      </p>

      <h3
        class="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10"
      >
        <p class="pb-4">Har du någon gång sett något av följande?</p>
      </h3>
      <ul class="list-disc">
        <li class="pb-2">
          Hur tuppkycklingarna som föds in i äggindustrin dödas för att de inte
          är användbara?
        </li>
        <li class="pb-2">
          Reaktionerna från ko och kalv när de separeras direkt efter födseln?
        </li>
        <li class="pb-2">
          Hur djur hålls instängda under hela sina liv och hur
          levnadsförhållandena ser ut?
        </li>
        <li class="pb-2">
          På vilket sätt dagsgamla kultingar avlivas genom att drämmas in i en
          vägg?
        </li>
        <li class="pb-2">Hur grisar (även eko-märkta) plågsamt gasas ihjäl?</li>
      </ul>
      <p class="pb-4">
        Om du inte har sett detta så behövs väl total insyn för att du ska kunna
        bilda dig en uppfattning om huruvida det är rätt eller inte?
      </p>

      <h3
        class="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10"
      >
        Vad kommer kampanjen att göra tills total insyn uppnås?
      </h3>
      <ul class="list-disc">
        <li class="pb-2">Dokumentera industrierna</li>
        <li class="pb-2">Sprida informationen till allmänheten</li>
        <li class="pb-2">
          Utföra aktioner för att sätta press på myndigheterna
        </li>
        <li class="pb-2">Skicka in motioner till riksdagen</li>
        <li class="pb-2">Samla in underskrifter</li>
      </ul>

      <h3
        class="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10"
      >
        Vem kan kräva total insyn och hur?
      </h3>
      <p class="pb-4">
        Alla kan hjälpa kampanjen och det finns flera sätt som du kan bidra på
      </p>
      <ul class="list-disc">
        <li class="pb-2">
          Du kan skriva under namninsamlingen till riksdagen
          www.change.org/totalinsyn
        </li>
        <li class="pb-2">Skriv till dina lokala politiker</li>
        <li class="pb-2">
          Dela inläggen som postas på Total insyn på Facebook och Instagram
        </li>
        <li class="pb-2">
          Sprid Total insyn-kampanjen genom att sätta upp information i området
          där du bor eller på dina sociala medier. Material till det hittar du
          här: https://totalinsyn.nu/material
        </li>
        <li class="pb-2">
          Använd hashtagen #totalinsyn när du delar material från Sveriges
          djurindustrier
        </li>
        <li class="pb-2">
          Posta en bild på dig själv där du håller i en skylt med texten “Jag
          kräver #totalinsyn”
        </li>
      </ul>

      <p class="pb-4">
        Kontakta oss genom att skicka ett meddelande via Facebook, Instagram
        eller info@totalinsyn.nu
      </p>
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
