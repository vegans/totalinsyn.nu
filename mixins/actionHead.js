export default ({ url, metaImage, title, description, action }) => {
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
        content: metaImage
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
        content: metaImage
      },

      { itemprop: 'name', content: title },
      { itemprop: 'description', content: description },
      { itemprop: 'image', content: metaImage }
    ]
  }
}
