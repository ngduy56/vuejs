import Vue from 'vue';
import Vuex from "vuex";
import counter from "../store/modules/counter";
import todo from "../store/modules/todo";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    counter: counter,
    todo: todo,
  },
});
