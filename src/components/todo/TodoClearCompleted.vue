<template>
  <button v-if="showClearCompletedButton" @click="clearCompleted">
    Clear Completed
  </button>
</template>

<script>
import store from "@/store";
export default {
  name: "todo-clear-completed",
  computed: {
    showClearCompletedButton() {
      return store.getters["todo/showClearCompletedButton"];
    },
  },
  methods: {
    clearCompleted() {
      store.dispatch("todo/clearCompleted");
    },
  },
};
</script>
