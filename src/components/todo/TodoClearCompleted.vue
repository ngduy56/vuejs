<template>
  <button v-if="showClearCompletedButton" @click="clearCompleted">
    Clear Completed
  </button>
</template>

<script>
// import store from "@/store";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "todo-clear-completed",
  computed: {
    ...mapGetters({
      showClearCompletedButton: "todo/showClearCompletedButton",
    }),
  },
  methods: {
    ...mapActions({ clear: "todo/clearCompleted" }),
    clearCompleted() {
      this.clear();
    },
  },
};
</script>
