<template>
  <div>
    <section class="hero is-medium is-primary totalinsyn1">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Total Insyn #01
          </h1>
          <h2 class="subtitle">
            Katrineholm - 2 oktober, 2019
          </h2>
        </div>
      </div>
    </section>
    <section>
      <div class="card">
        <div class="card-content">
          <div class="content">
            <div v-html="content"></div>
          </div>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <span>
              <a
                href="https://drive.google.com/drive/folders/1nCxifs9a-MBzufIMqkFFlJybntQNcvCP"
                target="_blank"
                rel="noopener"
                >Alla bilder</a
              >
            </span>
          </p>
        </footer>
      </div>
    </section>
    <section>
      <div class="columns">
        <div class="column">
          <thumbnail
            :image="'/01/IMG_5052.jpg'"
            :thumbnail="'/01/IMG_5052.jpg'"
          />
        </div>
        <div class="column">
          <thumbnail
            :image="'/01/IMG_5055.jpg'"
            :thumbnail="'/01/IMG_5055.jpg'"
          />
        </div>
        <div class="column">
          <thumbnail
            :image="'/01/IMG_5066.jpg'"
            :thumbnail="'/01/IMG_5066.jpg'"
          />
        </div>
        <div class="column">
          <thumbnail
            :image="'/01/IMG_5072.jpg'"
            :thumbnail="'/01/IMG_5072.jpg'"
          />
        </div>
      </div>
    </section>
    <section>
      <Panel :press="press" :livestream="livestream" />
    </section>
    <section>
      <figure class="image is-16by9">
        <iframe
          class="has-ratio"
          width="640"
          height="360"
          src="https://www.youtube.com/embed/k4s4WKkFc2Y?showinfo=0"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </figure>
    </section>
  </div>
</template>

<script>
import content from '~/content/01.md'
import Thumbnail from '~/components/Thumbnail'
import Panel from '~/components/Panel'

export default {
  components: {
    Thumbnail,
    Panel
  },
  data() {
    return {
      content,
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
  },
  head() {
    return {
      title: '#01',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Katrineholm - 2 oktober, 2019'
        },
        { property: 'og:title', content: 'Total Insyn #01' },
        { property: 'og:site_name', content: 'Total Insyn' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://totalinsyn.nu/01' },
        {
          property: 'og:image',
          content: 'https://totalinsyn.nu/01/meta.jpg'
        },
        {
          property: 'og:description',
          content: 'Katrineholm - 2 oktober, 2019'
        },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: 'https://totalinsyn.nu/01' },
        { name: 'twitter:title', content: 'Total Insyn #01' },
        {
          name: 'twitter:description',
          content: 'Katrineholm - 2 oktober, 2019'
        },
        {
          name: 'twitter:image:src',
          content: 'https://totalinsyn.nu/01/meta.jpg'
        },

        { itemprop: 'name', content: 'Total Insyn #01' },
        { itemprop: 'description', content: 'Katrineholm - 2 oktober, 2019' },
        { itemprop: 'image', content: 'https://totalinsyn.nu/01/meta.jpg' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
iframe {
  margin: 10px 0;
}
.card {
  max-width: 500px;
  margin: 10px auto;
}
.hero {
  background-size: cover;
  background-image: url('/01/hero.jpg');
}
</style>
