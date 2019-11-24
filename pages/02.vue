<template>
  <div>
    <section class="hero is-medium is-dark totalinsyn1">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Total Insyn #02
          </h1>
          <h2 class="subtitle">
            Kristianstad - 20 november, 2019
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
                href="https://drive.google.com/drive/folders/1arQkgvgKHJX9yX5kCtaPylgxqpOORJEz"
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
      <Panel :press="press" :livestream="livestream" />
    </section>
    <section>
      <div class="is-divider" data-content="2019-10-19"></div>
      <div class="columns">
        <div class="column">
          <thumbnail
            :image="'/02/2019-10-19/1.jpg'"
            :thumbnail="'/02/2019-10-19/1_thumb.jpg'"
          />
        </div>
        <div class="column">
          <thumbnail
            :image="'/02/2019-10-19/2.jpg'"
            :thumbnail="'/02/2019-10-19/2_thumb.jpg'"
          />
        </div>
        <div class="column">
          <thumbnail
            :image="'/02/2019-10-19/3.jpg'"
            :thumbnail="'/02/2019-10-19/3_thumb.jpg'"
          />
        </div>
        <div class="column">
          <thumbnail
            :image="'/02/2019-10-19/4.jpg'"
            :thumbnail="'/02/2019-10-19/4_thumb.jpg'"
          />
        </div>
      </div>
    </section>
    <section>
      <div class="is-divider" data-content="2019-10-20"></div>
      <div class="columns">
        <div class="column">
          <thumbnail
            :image="'/02/2019-10-20/1.jpg'"
            :thumbnail="'/02/2019-10-20/1_thumb.jpg'"
          />
        </div>
        <div class="column">
          <thumbnail
            :image="'/02/2019-10-20/2.jpg'"
            :thumbnail="'/02/2019-10-20/2_thumb.jpg'"
          />
        </div>
        <div class="column">
          <thumbnail
            :image="'/02/2019-10-20/3.jpg'"
            :thumbnail="'/02/2019-10-20/3_thumb.jpg'"
          />
        </div>
        <div class="column">
          <thumbnail
            :image="'/02/2019-10-20/4.jpg'"
            :thumbnail="'/02/2019-10-20/4_thumb.jpg'"
          />
        </div>
      </div>
    </section>
    <section>
      <div class="is-divider" data-content="2019-11-09"></div>
      <div class="columns">
        <div class="column">
          <thumbnail
            :image="'/02/2019-11-09/1.jpg'"
            :thumbnail="'/02/2019-11-09/1_thumb.jpg'"
          />
        </div>
        <div class="column">
          <thumbnail
            :image="'/02/2019-11-09/2.jpg'"
            :thumbnail="'/02/2019-11-09/2_thumb.jpg'"
          />
        </div>
        <div class="column">
          <thumbnail
            :image="'/02/2019-11-09/3.jpg'"
            :thumbnail="'/02/2019-11-09/3_thumb.jpg'"
          />
        </div>
        <div class="column">
          <thumbnail
            :image="'/02/2019-11-09/4.jpg'"
            :thumbnail="'/02/2019-11-09/4_thumb.jpg'"
          />
        </div>
      </div>
    </section>
    <section>
      <div class="is-divider" data-content="2019-11-19"></div>
      <div class="columns">
        <div class="column">
          <thumbnail
            :image="'/02/2019-11-19/1.jpg'"
            :thumbnail="'/02/2019-11-19/1_thumb.jpg'"
          />
        </div>
        <div class="column">
          <thumbnail
            :image="'/02/2019-11-19/2.jpg'"
            :thumbnail="'/02/2019-11-19/2_thumb.jpg'"
          />
        </div>
        <div class="column">
          <thumbnail
            :image="'/02/2019-11-19/3.jpg'"
            :thumbnail="'/02/2019-11-19/3_thumb.jpg'"
          />
        </div>
        <div class="column">
          <thumbnail
            :image="'/02/2019-11-19/4.jpg'"
            :thumbnail="'/02/2019-11-19/4_thumb.jpg'"
          />
        </div>
      </div>
    </section>
    <section>
      <div class="is-divider" data-content="2019-11-20"></div>
      <div class="columns">
        <div class="column">
          <thumbnail
            :image="'/02/2019-11-20/1.jpg'"
            :thumbnail="'/02/2019-11-20/1_thumb.jpg'"
          />
        </div>
        <div class="column">
          <thumbnail
            :image="'/02/2019-11-20/2.jpg'"
            :thumbnail="'/02/2019-11-20/2_thumb.jpg'"
          />
        </div>
        <div class="column">
          <thumbnail
            :image="'/02/2019-11-20/3.jpg'"
            :thumbnail="'/02/2019-11-20/3_thumb.jpg'"
          />
        </div>
        <div class="column">
          <thumbnail
            :image="'/02/2019-11-20/4.jpg'"
            :thumbnail="'/02/2019-11-20/4_thumb.jpg'"
          />
        </div>
      </div>
    </section>
    <section>
      <div class="is-divider" data-content="Video"></div>
      <figure class="image is-16by9">
        <iframe
          class="has-ratio"
          width="640"
          height="360"
          src="https://www.youtube.com/embed/GPge15gJnZw?showinfo=0"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </figure>
    </section>
  </div>
</template>

<script>
import content from '~/content/02.md'
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
  },
  head() {
    return {
      title: '#02',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Kristianstad - 20 november, 2019'
        },
        { property: 'og:title', content: 'Total Insyn #02' },
        { property: 'og:site_name', content: 'Total Insyn' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://totalinsyn.nu/02' },
        {
          property: 'og:image',
          content: 'https://totalinsyn.nu/02/meta.jpg'
        },
        {
          property: 'og:description',
          content: 'Kristianstad - 20 november, 2019'
        },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: 'https://totalinsyn.nu/02' },
        { name: 'twitter:title', content: 'Total Insyn #02' },
        {
          name: 'twitter:description',
          content: 'Kristianstad - 20 november, 2019'
        },
        {
          name: 'twitter:image:src',
          content: 'https://totalinsyn.nu/02/meta.jpg'
        },

        { itemprop: 'name', content: 'Total Insyn #02' },
        {
          itemprop: 'description',
          content: 'Kristianstad - 20 november, 2019'
        },
        { itemprop: 'image', content: 'https://totalinsyn.nu/02/meta.jpg' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  max-width: 500px;
  margin: 10px auto;
}
.hero {
  background-size: cover;
  background-image: url('/02/hero.jpg');
  background-color: #828282;
  background-blend-mode: soft-light;
}
</style>
