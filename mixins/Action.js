export default {
  data() {
    return {
      action: '',
      url: '',
      metaImage: '',
      title: '',
      description: ''
    }
  },
  head() {
    return this.generateHead({
      action: this.action,
      url: this.url,
      title: this.title,
      description: this.description
    })
  },
  methods: {
    generateHead({ url, image, title, description, action }) {
      return {
        title: action,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: description
          },
          { property: 'og:title', content: title },
          { property: 'og:site_name', content: 'Total Insyn' },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: url },
          {
            property: 'og:image',
            content: image
          },
          {
            property: 'og:description',
            content: description
          },
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:site', content: url },
          { name: 'twitter:title', content: title },
          {
            name: 'twitter:description',
            content: description
          },
          {
            name: 'twitter:image:src',
            content: image
          },
          { itemprop: 'name', content: title },
          { itemprop: 'description', content: description },
          { itemprop: 'image', content: image }
        ]
      }
    }
  }
}
