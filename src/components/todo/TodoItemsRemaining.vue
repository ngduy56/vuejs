<template>
  <div>{{ remaining }} items left</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "todo-remaining",
  computed: {
    ...mapGetters({
      remaining: "todo/remaining",
    }),
  },
};
</script>
