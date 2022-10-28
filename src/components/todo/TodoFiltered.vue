<template>
  <div>
    <button :class="{ active: filter == 'all' }" @click="changeFilter('all')">
      All
    </button>
    <button
      :class="{ active: filter == 'active' }"
      @click="changeFilter('active')"
    >
      Active
    </button>
    <button
      :class="{ active: filter == 'completed' }"
      @click="changeFilter('completed')"
    >
      Completed
    </button>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "todo-filtered",
  computed: {
    filter() {
      return store.state.todo.filter;
    },
  },
  methods: {
    changeFilter(filter) {
      store.dispatch("todo/changeFilter", filter);
    },
  },
};
</script>
<style scoped>
button {
  margin-right: 10px;
  background-color: white;
  appearance: none;
  border: 1px solid black;
  border-radius: 4px;
}
button:hover {
  background: rgb(188, 238, 247);
}
button:focus {
  outline: none;
}
.active {
  background: rgb(188, 238, 247);
}
</style>
