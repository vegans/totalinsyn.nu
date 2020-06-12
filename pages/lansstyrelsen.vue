<template>
  <div>
    <video-embed url="https://www.youtube.com/embed/zsBLEGh9pv4?showinfo=0" />
    <ti-divider>Bilder</ti-divider>
    <image-source
      src="/lansstyrelsen/lobbyn1.png"
      text="Lobbyn påstår det"
      href="https://www.ja.se/artikel/46115/delad.html"
    />
    <image-source
      src="/lansstyrelsen/rapport1.png"
      text="Rapport från Länsstyrelsen"
    />
    <image-source
      src="/lansstyrelsen/rapport2.png"
      text="Rapport från Länsstyrelsen"
    />
    <image-source
      src="/lansstyrelsen/rapport3.png"
      text="Rapport från Länsstyrelsen"
    />
    <image-source
      src="/lansstyrelsen/bild1.png"
      text="Bild från Länsstyrelsen"
    />
    <image-source
      src="/lansstyrelsen/bild2.png"
      text="Bild från Länsstyrelsen"
    />
    <image-source
      src="/lansstyrelsen/bild3.png"
      text="Bild från Länsstyrelsen"
    />
    <image-source
      src="/lansstyrelsen/lrf.png"
      text="Lobbyn kräver hårdare tag"
      href="http://www.kristianstadsbladet.se/kristianstad/tjugotal-aktivister-har-tagit-sig-in-pa-grisgard/"
    />
    <image-source
      src="/lansstyrelsen/scan.png"
      text="Industrin skryter om sin djurhållning"
    />
    <image-source src="/lansstyrelsen/mail.png" text="Mail med Länsstyrelsen" />
  </div>
</template>

<script>
import Action from '~/mixins/Action.js'

export default {
  mixins: [Action],
  data() {
    return {
      page: {
        action: 'Världens bästa djurskydd',
        url: 'https://totalinsyn.nu/lansstyrelsen',
        title: 'Världens bästa djurskydd'
      }
    }
  }
}
</script>
