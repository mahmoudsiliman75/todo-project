import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawerIsVisible: false,
  },
  mutations: {
    toggleDrawer(state) {
      state.drawerIsVisible = !state.drawerIsVisible;
    }
  },
  actions: {},
  modules: {}
});
