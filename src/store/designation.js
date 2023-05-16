import { createStore } from "vuex";

export default createStore({
  state: {
    createDesignations: []
  },
  mutations : {
    addDesignation(state, designation) {
      state.createdDesignations.push(designation);
    }
  },
  actions: {
    addDesignation({ commit }, designation) {
      commit('addDesignation', designation);
    }
  },
  getters: {
    getCreatedDesignations(state) {
      return state.createDesignations;
    }
  }
});