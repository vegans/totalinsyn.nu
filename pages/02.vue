<template>
  <div>
    <ti-hero
      title="Total Insyn #02"
      subtitle="Kristianstad - 20 november, 2019"
      image="/02/header.jpg"
      :full="false"
      :image-url="
        'https://drive.google.com/drive/folders/1arQkgvgKHJX9yX5kCtaPylgxqpOORJEz'
      "
    />
    <press-release
      sub="Pressmeddelande onsdagen den 20 november 2019"
      title="Aktivister synar grisgård i Skåne"
      :content="content"
    />
    <panel :press="press" :livestream="livestream" />
    <photo-strip
      v-for="(images, date) in dates"
      :key="date"
      :images="images"
      :title="date"
    />
    <video-embed url="https://www.youtube.com/embed/GPge15gJnZw?showinfo=0" />
    <action-map :coordinates="[13.99179, 55.987572]" />
  </div>
</template>

<script>
import content from '~/content/02.md'
import Action from '~/mixins/Action.js'

export default {
  mixins: [Action],
  data() {
    return {
      action: '#02',
      url: 'https://totalinsyn.nu/02',
      metaImage: 'https://totalinsyn.nu/02/header.jpg?style=meta',
      title: 'Total Insyn #02',
      description: 'Kristianstad - 20 november, 2019',
      content,
      dates: {
        '2019-10-19': [
          '/02/2019-10-19/1',
          '/02/2019-10-19/2',
          '/02/2019-10-19/3',
          '/02/2019-10-19/4'
        ],
        '2019-10-20': [
          '/02/2019-10-20/1',
          '/02/2019-10-20/2',
          '/02/2019-10-20/3',
          '/02/2019-10-20/4'
        ],
        '2019-11-09': [
          '/02/2019-11-09/1',
          '/02/2019-11-09/2',
          '/02/2019-11-09/3',
          '/02/2019-11-09/4'
        ],
        '2019-11-19': [
          '/02/2019-11-19/1',
          '/02/2019-11-19/2',
          '/02/2019-11-19/3',
          '/02/2019-11-19/4'
        ],
        '2019-11-20': [
          '/02/2019-11-20/1',
          '/02/2019-11-20/2',
          '/02/2019-11-20/3',
          '/02/2019-11-20/4'
        ]
      },
      press: [
        {
          name: 'Anlib',
          url: 'https://anlib.se/nyheter/inrikes/sander-live-fran-grisfabrik/'
        },
        {
          name: 'Kristianstadsbladet',
          url:
            'http://www.kristianstadsbladet.se/kristianstad/tjugotal-aktivister-har-tagit-sig-in-pa-grisgard/'
        },
        {
          name: 'Sveriges Radio',
          url:
            'https://sverigesradio.se/sida/artikel.aspx?programid=101&artikel=7348365'
        },
        {
          name: 'Sveriges Radio',
          url:
            'https://sverigesradio.se/sida/artikel.aspx?programid=101&artikel=7349632'
        },
        {
          name: 'ATL',
          url:
            'https://www.atl.nu/lantbruk/tva-aktivister-gripna-efter-aktion-i-grisstall/'
        },
        {
          name: 'Jordbruksaktuellt',
          url: 'https://www.ja.se/artikel/61426/delad.html'
        }
      ],
      livestream: [
        {
          name: 'Svensk grisproduktion',
          url:
            'https://www.facebook.com/svenskgrisproduktion/videos/713623332476753/'
        },
        {
          name: 'A.R.E Sweden',
          url: 'https://www.facebook.com/arexpsweden/videos/562195541222869/'
        },
        {
          name: 'Sonja Marie',
          url:
            'https://www.facebook.com/sonja.marie125/videos/2909969759049287/'
        }
      ]
    }
  }
}
</script>
