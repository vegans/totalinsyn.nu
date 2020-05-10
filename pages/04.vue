<template>
  <div>
    <ti-hero
      :title="title"
      :subtitle="description"
      image="/04/header.jpg"
      :full="false"
    >
      På småtimmarna natten till söndagen besökte aktivister i Kampanjen Total
      insyn en av regionens största äggproducenter.
    </ti-hero>
    <press-release
      sub="Söndagen den 10 maj 2020"
      title="24 burhönor befriade i natt i Dalarna"
      :content="content"
      :prefix="false"
    />
    <panel :press="press" :livestream="livestream" />
    <photo-strip
      v-for="(images, date) in dates"
      :key="date"
      :images="images"
      :title="date"
    />
    <!-- <video-embed url="https://www.youtube.com/embed/e1HTVN4Aly8?showinfo=0" /> -->
    <action-map :coordinates="coordinates" />
  </div>
</template>

<script>
import content from '~/content/04.md'
import Action from '~/mixins/Action.js'

export default {
  mixins: [Action],
  data() {
    return {
      content,
      action: '#04',
      url: 'https://totalinsyn.nu/04',
      title: 'Total Insyn #04',
      description: 'Dalarna - 10 maj, 2020',
      coordinates: [[15.6355, 60.606461]],
      dates: {
        '2020-05-10': ['/04/image1', '/04/image2', '/04/image3', '/04/image4']
      },
      press: [
        {
          name: 'Anlib',
          url:
            'https://anlib.se/nyheter/inrikes/exponerade-sju-grisfabriker-inatt/'
        },
        {
          name: 'Tidningen Syre',
          url:
            'https://tidningensyre.se/2020/30-april/intrang-pa-grisfarmer-filmades/'
        },
        {
          name: 'Skånska dagbladet',
          url:
            'https://www.skd.se/2020/04/27/djurrattsaktivister-trangde-in-pa-gard/'
        },
        {
          name: 'ATL',
          url:
            'https://www.atl.nu/lantbruk/aktivister-inne-pa-sju-svenska-gardar/'
        }
      ],
      livestream: [
        {
          name: 'Total Insyn',
          url: 'https://www.facebook.com/totalinsyn/videos/3027641393985083'
        }
      ]
    }
  }
}
</script>
