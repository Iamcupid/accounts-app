import { createStore } from 'vuex';

export default createStore({
  state: {
    createdCategories: []
  },
  mutations: {
    addCategory(state, category) {
      state.createdCategories.push(category);
    }
  },
  actions: {
    addCategory({ commit }, category) {
      commit('addCategory', category);
    }
  },
  getters: {
    getCreatedCategories(state) {
      return state.createdCategories;
    }
  }
});
