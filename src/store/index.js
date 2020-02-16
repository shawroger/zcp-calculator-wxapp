import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allSelect: true
  },
  mutations: {
    'SET_ALLSELECT'(state, payload) {
      state.allSelect = payload;
    }
  }
});
