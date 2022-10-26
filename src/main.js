import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueRouter from "vue-router";

Vue.config.productionTip = false;
Vue.use(VueRouter);
import Counter from "./components/Counter.vue";
import TodoApp from "./components/TodoApp.vue";
import Request from "./components/Request.vue";

const routes = [
  { path: "/counter", component: Counter },
  { path: "/todo", component: TodoApp },
  { path: "/request", component: Request },
];

const router = new VueRouter({
  routes,
});

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
