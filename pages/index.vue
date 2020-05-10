<template>
  <div>
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
  </div>
</template>

<script>
export default {
  layout: 'withHeader',
  data() {
    return {
      mobileOpen: false,
      isOpen: false,
      isOpenMore: false
    }
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
