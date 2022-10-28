<template>
  <div>
    <label
      ><input type="checkbox" :checked="!anyRemaining" @change="checkAll" />
      Check All</label
    >
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "todo-check-all",
  computed: {
    anyRemaining() {
      return store.getters["todo/anyRemaining"];
    },
  },
  methods: {
    checkAll() {
      store.dispatch("todo/checkAll", event.target.checked);
    },
  },
};
</script>
