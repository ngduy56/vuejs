<template>
  <div>
    <button @click="decreasement">Giảm</button>
    <span>Đếm số: {{ counterNumber }} con vịt</span>
    <button @click="increasement">Tăng</button>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "counter-ex",
  data() {
    return {};
  },
  methods: {
    increasement() {
      store.state.counter.count++;
    },
    decreasement() {
      store.state.counter.count--;
    },
  },
  computed: {
    counterNumber() {
      return store.state.counter.count;
    },
  },
};
</script>

<style></style>
