import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.config.productionTip = false;
Vue.use(VueRouter);
export const eventBus = new Vue();

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
