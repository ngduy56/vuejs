<template>
  <div>{{ remaining }} items left</div>
</template>

<script>
import store from '@/store';
export default {
  name: "todo-remaining",
  computed: {
    remaining() {
      return store.getters["todo/remaining"];
    },
  },
};
</script>
