import Counter from "./components/Counter.vue";
import HelloWorld from "./components/HelloWorld.vue";
import TodoDetails from "./components/todo/TodoDetails.vue";
import TodoList from "./components/todo/TodoList.vue";
import TodoView from "./view/TodoView.vue";
import LoginPage from "./components/LoginPage.vue";
import HomePage from "./components/HomePage.vue";
import RegisterPage from "./components/RegisterPage.vue";

export const routes = [
  { path: "/", name: "homepage", component: HelloWorld },
  { path: "/mini", name: "minipage", component: Counter },
  { path: "/login", name: "loginpage", component: LoginPage },
  { path: "/register", name: "registerpage", component: RegisterPage },
  { path: "/home", name: "homepage", component: HomePage },
  {
    path: "/todo",
    component: TodoView,
    children: [
      { path: "", name: "todopage", component: TodoList },
      { path: ":id", name: "detailpage", component: TodoDetails },
    ],
  },
];
