import * as contentful from 'contentful'

// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
  space: 'vl8ocwv1mubf',
  accessToken: 'qnTfaakGXUTCpnJn8Tk8TctQcFaAtGI-ITnN70QBhMI'
}

export const createClient = () => {
  const client = contentful.createClient(config)
  client.getPage = async (slug) => {
    const res = await client.getEntries({
      content_type: 'page',
      'fields.slug[in]': slug
    })
    // convert result
    return res
  }
  return client
}

export default (ctx, inject) => {
  const contentfulClient = createClient()
  inject('contentful', contentfulClient)
}