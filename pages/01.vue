<template>
  <div>
    <hero
      title="Total Insyn #01"
      subtitle="Katrineholm - 2 oktober, 2019"
      image="/01/hero.jpg"
    />
    <press-release
      :imagesLink="
        'https://drive.google.com/drive/folders/1nCxifs9a-MBzufIMqkFFlJybntQNcvCP'
      "
      :content="content"
    />
    <panel :press="press" :livestream="livestream" />
    <photo-strip :images="images" title="2019-10-04" />
    <video-embed url="https://www.youtube.com/embed/k4s4WKkFc2Y?showinfo=0" />
    <action-map :coordinates="[16.20618, 58.99592]" />
  </div>
</template>

<script>
import content from '~/content/01.md'
import Action from '~/mixins/Action.js'

export default {
  mixins: [Action],
  data() {
    return {
      action: '#01',
      url: 'https://totalinsyn.nu/01',
      metaImage: 'https://totalinsyn.nu/01/meta.jpg',
      title: 'Total Insyn #01',
      description: 'Katrineholm - 2 oktober, 2019',
      content,
      images: ['/01/IMG_5052', '/01/IMG_5055', '/01/IMG_5066', '/01/IMG_5072'],
      press: [
        {
          name: 'Anlib',
          url:
            'https://anlib.se/nyheter/inrikes/ockuperade-kycklingfabrik-kraver-total-insyn/'
        },
        {
          name: 'Katrineholms-Kuriren',
          url:
            'https://www.kkuriren.se/nyheter/katrineholm/aktivister-stangdes-in-hos-slaktkycklingarna-sm5244450.aspx'
        }
      ],
      livestream: [
        {
          name: 'Svensk fågelproduktion',
          url:
            'https://www.facebook.com/svenskfagelproduktion/videos/2149182028724411/'
        }
      ]
    }
  }
}
</script>
