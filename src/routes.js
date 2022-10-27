import Counter from "./components/Counter.vue";
import TodoList from "./components/TodoList.vue";
import HelloWorld from "./components/HelloWorld.vue";

export const routes = [
  { path: "/", name: "homepage", component: HelloWorld },
  { path: "/mini", name: "minipage", component: Counter },
  { path: "/todo", name: "todopage", component: TodoList },
];
