import { createStore } from "vuex"

export default createStore({
  state: {
    createdItems: []
  },
  mutations: {
    addItem(state, item) {
      state.createdItems.push(item);
    }
  },
  actions: {
    addItem({ commit }, item) {
      commit('addItem', item);
    }
  },
  getters: {
    getCreatedItems(state) {
      return state.createdItems;
    }
  }
});