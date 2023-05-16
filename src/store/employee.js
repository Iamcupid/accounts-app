import { createStore } from "vuex";

export default createStore({
  state: {
    createdEmployees: []
  },
  mutations: {
    addEmployee(state, employee) {
      state.createdEmployees.push(employee);
    }
  },
  actions: {
    addEmployee({ commit }, employee) {
      commit('addEmployee', employee)
    }
  },
  getters: {
    getCreatedEmployees(states) {
      return state.createdEmployees;
    }
  }
});