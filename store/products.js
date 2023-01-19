export const state = () => ({
  products: []
})

export const mutations = {
  setProducts(state, products) {
    state.products = products
  }
}

export const actions = {
  async fetch({commit}) {
    const products = await this.$axios.$get('https://fakestoreapi.com/products/')
    commit('setProducts', products)
  }
}

export const getters = {
  products: p => p.products
}
