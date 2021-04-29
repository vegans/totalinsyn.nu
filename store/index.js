const byOrder = (a, b) => a.order - b.order

export const actions = {
  async nuxtServerInit({ commit }) {
    const res = await this.$contentful.getEntries({
      content_type: 'page'
    })
    const pages = res.items
      .filter((item) => item.fields.menu)
      .map((item) => ({
        title: item.fields.title,
        slug: item.fields.slug,
        menu: item.fields.menu.fields
      }))
    commit('pages', pages)
  }
}

export const state = () => ({
  pages: []
})

export const mutations = {
  pages(state, pages) {
    const pagesTree = []
    pages
      .filter((page) => page.menu)
      .forEach((page) => {
        const pageObject = {
          title: page.menu.title ?? page.title ?? page.slug,
          url: '/' + page.slug,
          order: page.menu.order || 99,
          subtitle: page.menu.subtitle
        }
        if (page.menu?.parentTitle) {
          let parent = pagesTree.find(
            (_page) => _page.title === page.menu.parentTitle
          )
          if (!parent) {
            parent = {
              title: page.menu.parentTitle,
              order: page.menu.parentOrder || 1,
              children: []
            }
            pagesTree.push(parent)
          }
          parent.children.push(pageObject)
        } else {
          pagesTree.push(pageObject)
        }
      })
    pagesTree.sort(byOrder).forEach((page) => page.children?.sort(byOrder))
    state.pages = pagesTree
  }
}
