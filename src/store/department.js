import { createStore } from "vuex";

export default createStore({
  state: {
    createdDepartments: []
  },
  mutations: {
    addDepartment(state, department) {
      state.createdDepartments.push(department);
    }
  },
  actions: {
    addDepartment({ commit }, department) {
      commit('addDepartment', department);
    }
  },
  getter: {
    getCreatedDepartments(state) {
      return state.createdDepartments;
    }
  },
});