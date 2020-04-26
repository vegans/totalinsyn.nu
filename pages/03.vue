<template>
  <div>
    <ti-hero
      :title="title"
      :subtitle="description"
      image="/02/header.jpg"
      :full="false"
      :image-url="
        'https://drive.google.com/drive/folders/1arQkgvgKHJX9yX5kCtaPylgxqpOORJEz'
      "
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
    <!-- <photo-strip
      v-for="(images, date) in dates"
      :key="date"
      :images="images"
      :title="date"
    /> -->
    <!-- <video-embed url="https://www.youtube.com/embed/GPge15gJnZw?showinfo=0" /> -->
    <action-map :coordinates="coordinates" />
  </div>
</template>

<script>
import content from '~/content/02.md'
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
        '2019-10-19': [
          '/02/2019-10-19/1',
          '/02/2019-10-19/2',
          '/02/2019-10-19/3',
          '/02/2019-10-19/4'
        ]
      },
      press: [
        {
          name: 'Anlib',
          url:
            'https://anlib.se/nyheter/inrikes/exponerade-sju-grisfabriker-inatt/'
        }
      ],
      livestream: [
        {
          name: 'Karlskrona',
          url:
            'https://www.facebook.com/watch/live/?v=660423254520877&ref=watch_permalink'
        },
        {
          name: 'Göteborg',
          url:
            'https://www.facebook.com/watch/live/?v=1374354306082402&ref=watch_permalink'
        },
        {
          name: 'Linköping #1',
          url:
            'https://www.facebook.com/watch/live/?v=242167156837961&ref=watch_permalink'
        },
        {
          name: 'Linköping #2',
          url:
            'https://www.facebook.com/watch/live/?v=1626421280844810&ref=watch_permalink'
        },
        {
          name: '??? #1',
          url:
            'https://www.facebook.com/watch/live/?v=234228050995904&ref=watch_permalink'
        },
        {
          name: '??? #2',
          url:
            'https://www.facebook.com/watch/live/?v=606201163441176&ref=watch_permalink'
        },
        {
          name: '??? #3',
          url:
            'https://www.facebook.com/watch/live/?v=284299409238805&ref=watch_permalink'
        }
      ]
    }
  }
}
</script>
