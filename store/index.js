const byOrder = (a, b) => a.order - b.order

export const actions = {
  async nuxtServerInit({ commit }) {
    const pages = await this.$content('pages', { deep: true }).fetch()
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
          url: page.menu.url || page.path.replace('/pages', ''),
          order: page.menu.order || 99,
          subtitle: page.menu.subtitle
        }
        if (page.menu?.parent) {
          let parent = pagesTree.find(
            (_page) => _page.title === page.menu.parent
          )
          if (!parent) {
            parent = {
              title: page.menu.parent,
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
