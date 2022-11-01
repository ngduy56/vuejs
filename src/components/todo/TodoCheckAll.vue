<template>
  <div>
    <label
      ><input type="checkbox" :checked="!anyRemaining" @change="checkAll" />
      Check All</label
    >
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "todo-check-all",
  computed: {
    ...mapGetters({
      anyRemaining: "todo/anyRemaining",
    }),
  },
  methods: {
    ...mapActions({
      check: "todo/checkAll",
    }),
    checkAll() {
      this.check(event.target.checked);
    },
  },
};
</script>
