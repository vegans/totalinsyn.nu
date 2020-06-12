export const actions = {
  async nuxtServerInit({ commit }) {
    const actions = await this.$content('actions')
      .only(['slug', 'title', 'location', 'date', 'header'])
      .sortBy('slug', 'desc')
      .fetch()
    commit('actions', actions)
  }
}

export const state = () => ({
  content: []
})

export const mutations = {
  actions(state, actions) {
    state.content = actions
  }
}
