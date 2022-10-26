<script>
import Counter from './components/Counter.vue';
import TodoApp from './components/TodoApp.vue';
import Request from './components/Request.vue';

export default {
  name: 'App',
  components: {
    Counter,
    TodoApp,
    Request,
  },
}
</script>

<template>
  <div id="app">
    <Counter />
    <TodoApp />
    <Request />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
