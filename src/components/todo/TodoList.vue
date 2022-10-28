<template>
  <div class="container">
    <h3>Todo Simple</h3>
    <input
      type="text"
      class="todo-input"
      placeholder="Enter todo"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
    <todo-item
      v-for="todo in todosFiltered"
      :key="todo.id"
      :todo="todo"
      :checkAll="anyRemaining"
      @removeTodo="removeTodo"
      @doneEdit="doneEdit"
    >
    </todo-item>

    <div class="extra-container">
      <todo-check-all :anyRemaining="anyRemaining"></todo-check-all>
      <todo-items-remaining :remaining="remaining"></todo-items-remaining>
    </div>

    <div class="extra-container">
      <todo-filtered></todo-filtered>

      <div>
        <transition name="fade">
          <todo-clear-completed
            :showClearCompletedButton="showClearCompletedButton"
          ></todo-clear-completed>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import TodoItemsRemaining from "./TodoItemsRemaining";
import TodoCheckAll from "./TodoCheckAll";
import TodoFiltered from "./TodoFiltered";
import TodoClearCompleted from "./TodoClearCompleted";
import store from "../../store";
import { eventBus } from "@/main";

export default {
  name: "todo-list",
  components: {
    TodoItem,
    TodoItemsRemaining,
    TodoCheckAll,
    TodoFiltered,
    TodoClearCompleted,
  },
  data() {
    return {
      newTodo: "",
      idForTodo: 3,
      filter: "all",
      todos: [
        {
          id: 1,
          title: "Đi chơi nào",
          completed: false,
          editing: false,
        },
        {
          id: 2,
          title: "Đi làm thôi",
          completed: false,
          editing: false,
        },
      ],
    };
  },
  created() {
    eventBus.$on("removedTodo", (id) => this.removeTodo(id));
    eventBus.$on("doneEdit", (data) => this.doneEdit(data));
    eventBus.$on("checkAllChanged", (checked) => this.checkAllTodos(checked));
    eventBus.$on("filterChanged", (filter) => (this.filter = filter));
    eventBus.$on("clearCompletedTodos", () => this.clearCompleted());
    console.log(store.state.todo.todos);
  },
  beforeDestroy() {
    eventBus.$off("removedTodo");
    eventBus.$off("doneEdit");
    eventBus.$off("checkAllChanged");
    eventBus.$off("filterChanged");
    eventBus.$off("clearCompletedTodos");
  },
  computed: {
    remaining() {
      return this.todos.filter((todo) => !todo.completed).length;
    },
    anyRemaining() {
      return this.remaining === 0;
    },
    todosFiltered() {
      if (this.filter == "all") {
        return this.todos;
      } else if (this.filter == "active") {
        return this.todos.filter((todo) => !todo.completed);
      } else if (this.filter == "completed") {
        return this.todos.filter((todo) => todo.completed);
      }
      return this.todos;
    },
    showClearCompletedButton() {
      return this.todos.filter((todo) => todo.completed).length > 0;
    },
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length == 0) {
        return;
      }
      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false,
      });
      this.newTodo = "";
      this.idForTodo++;
    },
    removeTodo(id) {
      const index = this.todos.findIndex((item) => item.id == id);
      this.todos.splice(index, 1);
    },
    doneEdit(data) {
      const index = this.todos.findIndex((item) => item.id == data.id);
      this.todos.splice(index, 1, data);
    },
    checkAllTodos() {
      this.todos.forEach((todo) => (todo.completed = event.target.checked));
    },
    clearCompleted() {
      this.todos = this.todos.filter((todo) => !todo.completed);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  margin-top: 20px;
}
.todo-input {
  margin-top: 10px;
  max-width: 600px;
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;
  border-radius: 4px;
}
.todo:focus {
  outline: none;
}
.extra-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  border-top: 1px solid lightgrey;
  padding-top: 14px;
  margin-bottom: 14px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
