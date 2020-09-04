import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allSelect: true,
	use10cards: true
  },
  mutations: {
    'SET_ALLSELECT'(state, payload) {
      state.allSelect = payload;
    },
	'SET_USE10CARDS'(state, payload) {
	  state.use10cards = payload;
	},
  }
});
