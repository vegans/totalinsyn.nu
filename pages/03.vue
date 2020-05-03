<template>
  <div>
    <ti-hero
      :title="title"
      :subtitle="description"
      image="/03/header.jpg"
      :full="false"
    >
      Aktivister från kampanjen #totalinsyn sände direkt från sju olika
      grisfabriker natten till idag.
    </ti-hero>
    <press-release
      sub="Söndagen den 26 april 2020"
      title="Stor samordnad aktion i natt"
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
    <video-embed url="https://www.youtube.com/embed/e1HTVN4Aly8?showinfo=0" />
    <action-map :coordinates="coordinates" />
  </div>
</template>

<script>
import content from '~/content/03.md'
import Action from '~/mixins/Action.js'

export default {
  mixins: [Action],
  data() {
    return {
      content,
      action: '#03',
      url: 'https://totalinsyn.nu/03',
      title: 'Total Insyn #03',
      description: 'Sverige - 26 april, 2020',
      coordinates: [
        [11.97456, 57.70887], // Göteborg
        [13.43854, 55.795551], // Eslöv
        [13.99179, 55.987572], // Träne
        [15.621373, 58.410809], // Linköping
        [16.544809, 59.609901] // Västerås
      ],
      dates: {
        '2020-04-26': ['/03/image1', '/03/image2', '/03/image3', '/03/image4']
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
          name: 'Karlskrona',
          url: 'https://www.facebook.com/totalinsyn/videos/660423254520877'
        },
        {
          name: 'Göteborg',
          url: 'https://www.facebook.com/totalinsyn/videos/1374354306082402'
        },
        {
          name: 'Linköping #1',
          url: 'https://www.facebook.com/totalinsyn/videos/242167156837961'
        },
        {
          name: 'Linköping #2',
          url: 'https://www.facebook.com/totalinsyn/videos/1626421280844810'
        },
        {
          name: 'Linköping #3',
          url: 'https://www.facebook.com/totalinsyn/videos/234228050995904'
        },
        {
          name: 'Eslöv',
          url: 'https://www.facebook.com/totalinsyn/videos/606201163441176'
        },
        {
          name: 'Västerås',
          url: 'https://www.facebook.com/totalinsyn/videos/284299409238805'
        }
      ]
    }
  }
}
</script>
