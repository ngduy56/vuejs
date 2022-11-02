import Vue from "vue";
import VueRouter from "vue-router";
import Counter from "./components/Counter.vue";
import HelloWorld from "./components/HelloWorld.vue";
import HomePage from "./components/HomePage.vue";
import LoginPage from "./components/LoginPage.vue";
import RegisterPage from "./components/RegisterPage.vue";
import TodoDetails from "./components/todo/TodoDetails.vue";
import TodoList from "./components/todo/TodoList.vue";
import store from "./store";
import TodoView from "./view/TodoView.vue";

Vue.use(VueRouter);
export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "helloworld", component: HelloWorld },
    { path: "/mini", name: "minipage", component: Counter },
    {
      path: "/login",
      name: "loginpage",
      component: LoginPage,
    },
    { path: "/register", name: "registerpage", component: RegisterPage },
    {
      path: "/home",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/todo",
      component: TodoView,
      children: [
        { path: "", name: "todopage", component: TodoList },
        { path: ":id", name: "detailpage", component: TodoDetails },
      ],
    },
  ],
});
router.beforeEach((to, from, next) => {
  const isLogged = store.getters["user/logged"];
  if ((to.path === "/login" || to.path === "/register") && isLogged)
    next({ path: "/home" });
  else if (to.path !== "/login" && to.path !== "/register" && !isLogged) {
    next({ path: "/login" });
  } else next();
});
