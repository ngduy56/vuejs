<template>
    <div>
        <h3>Todo</h3>
        <input type="text" v-model="newTask"/>
        <button @click="handleAdd">Add todo</button>
        <div class="wrapper">
            <div class="block">
                <div v-for="(task, index) in uncompletedTasks" :key="index">
                <input type="checkbox" v-model="task.status" />
                <span :class="{done: task.status}">{{ task.content}}</span>
                </div>
            </div>
            <div class="block">
                <div v-for="(task, index) in completedTasks" :key="index">
                <input type="checkbox" v-model="task.status" />
                <span :class="{done: task.status}">{{ task.content}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      newTask: "",
      tasks: [
        { content: "Đi chơi", status: false },
        { content: "Học bài", status: false},
        { content: "Mua đồ", status: false},
        { content: "Ăn cơm ", status: false },
        { content: "Ăn chè ", status: true },
      ]
    }
  },
  methods: {
    handleAdd() {
      this.tasks.push({ content: this.newTask, status: false})
    },
  },
  computed: {
    completedTasks() {
      return this.tasks.filter(task => task.status)
    },
    uncompletedTasks() {
      return this.tasks.filter(task => !task.status)
    },
  },
}
</script>

<style scoped>
.done {
    text-decoration: line-through;
}
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}
.block {
    margin: 20px;
}
</style>