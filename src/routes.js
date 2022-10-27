import Counter from "./components/Counter.vue";
import TodoApp from "./components/TodoApp.vue";
import Request from "./components/Request.vue";

export const routes = [
  { path: "/counter", component: Counter },
  { path: "/todo", component: TodoApp },
  { path: "/request", component: Request },
];
