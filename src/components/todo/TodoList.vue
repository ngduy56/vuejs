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
      :checkAll="!anyRemaining"
    >
    </todo-item>
    <div class="extra-container">
      <todo-pagination></todo-pagination>
    </div>

    <div class="extra-container">
      <todo-check-all></todo-check-all>
      <todo-items-remaining></todo-items-remaining>
    </div>

    <div class="extra-container">
      <todo-filtered></todo-filtered>
      <transition name="fade">
        <todo-clear-completed></todo-clear-completed>
      </transition>
    </div>
  </div>
</template>

<script>
// import store from "@/store";
import TodoCheckAll from "./TodoCheckAll";
import TodoClearCompleted from "./TodoClearCompleted";
import TodoFiltered from "./TodoFiltered";
import TodoItem from "./TodoItem.vue";
import TodoItemsRemaining from "./TodoItemsRemaining";
import TodoPagination from "./TodoPagination";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "todo-list",
  components: {
    TodoItem,
    TodoItemsRemaining,
    TodoCheckAll,
    TodoFiltered,
    TodoClearCompleted,
    TodoPagination,
  },
  data() {
    return {
      newTodo: "",
      idForTodo: 3,
    };
  },
  created() {
    this.fetchData();
  },
  computed: {
    ...mapGetters({
      anyRemaining: "todo/anyRemaining",
      todosFiltered: "todo/todosFiltered",
    }),
  },
  methods: {
    ...mapActions({
      add: "todo/addTodo",
      fetch: "todo/fetchData",
    }),
    fetchData() {
      this.fetch();
    },
    addTodo() {
      if (this.newTodo.trim().length == 0) {
        return;
      }
      this.add({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false,
        editing: false,
      });
      this.newTodo = "";
      this.idForTodo++;
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
