import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 4,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

new Vue({
  render: (h) => h(App),
  store: store,
}).$mount("#app");
