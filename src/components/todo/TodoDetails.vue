<template>
  <div class="container">
    <h3>Todo details</h3>
    <span>Details for todo: {{ id }}</span>
  </div>
</template>

<script>
export default {
  name: "todo-details",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style></style>
