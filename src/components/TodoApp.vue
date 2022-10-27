<template>
  <div class="container">
    <h2>Todo</h2>
    <input class="input" type="text" v-model="newTask" />
    <button class="btn" @click="handleAdd">Add todo</button>
    <div class="wrapper">
      <div class="block">
        <li v-for="(task, index) in uncompletedTasks" :key="index">
          <input class="checkbox" type="checkbox" v-model="task.status" />
          <span :class="{ done: task.status }">{{ task.content }}</span>
        </li>
      </div>
      <div class="block">
        <li v-for="(task, index) in completedTasks" :key="index">
          <input type="checkbox" v-model="task.status" />
          <span :class="{ done: task.status }">{{ task.content }}</span>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      newTask: "",
      tasks: [
        { content: "Đi chơi", status: false },
        { content: "Học bài", status: false },
        { content: "Mua đồ", status: false },
        { content: "Ăn cơm ", status: false },
        { content: "Ăn chè ", status: true },
      ],
    };
  },
  methods: {
    handleAdd() {
      this.tasks.push({ content: this.newTask, status: false });
    },
  },
  computed: {
    completedTasks() {
      return this.tasks.filter((task) => task.status);
    },
    uncompletedTasks() {
      return this.tasks.filter((task) => !task.status);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.done {
  text-decoration: line-through;
}
.wrapper {
  border: 1px solid black;
  border-radius: 4px;
  margin-top: 20px;
  width: 350px;
  display: flex;
  justify-content: center;
}
.block {
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.block li {
  list-style: none;
  width: 200px;
}
.checkbox {
  margin: 0;
  padding: 0;
}
.input {
  height: 30px;
  width: 350px;
  outline: none;
  border-radius: 4px;
}
.btn {
  margin-top: 10px;
  height: 34px;
  width: 80px;
  font-size: 0.9rem;
  background-color: rgb(0, 115, 255);
  color: white;
  border: none;
  border-radius: 4px;
}
.btn:hover {
  background-color: rgba(0, 115, 255, 0.8);
  border: 1px solid black;
  cursor: pointer;
}
</style>
