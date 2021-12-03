import { createStore } from 'vuex'

export default createStore({
  state: {
    name: "",
    publishAsPublic: true,
    items: []

  },
  mutations: {
    SET_MEAL_PLAN(state, data) {
      state.name = data.name;
      state.publishAsPublic = data.publishAsPublic;
      state.items = data.items;
    }
  },
  actions: {
  },
  modules: {
  }
})
