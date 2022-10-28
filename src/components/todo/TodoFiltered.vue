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
import { eventBus } from "@/main";

export default {
  name: "todo-filtered",
  data() {
    return {
      filter: "all",
    };
  },
  methods: {
    changeFilter(filter) {
      this.filter = filter;
      eventBus.$emit("filterChanged", filter);
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
