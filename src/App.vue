
<script>

import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      posts: [],
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
  created() {
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },

  methods: {
    handleAdd: function () {
      this.tasks.push({ content: this.newTask, status: false})
    },
    handleIncrement: function () {
      this.$store.state.count++;
    },
    handleDecrement: function () {
      this.$store.state.count--;
    }
  },

  computed: {
    completedTasks: function() {
      return this.tasks.filter(task => task.status)
    },
    uncompletedTasks: function () {
      return this.tasks.filter(task => !task.status)
    },
    counter: function(){
      return this.$store.state.count;
    }

  },
}
</script>



<template>
  <div id="app">
    <button @click='handleDecrement'>Giảm</button>
    <span>Đếm số: {{ counter }} con vịt</span>
    <button @click='handleIncrement'>Tăng</button>
    
    <!-- <ul v-if="posts && posts.length">
      <li v-for="post of posts" :key="post.title">
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
      </li>
    </ul> -->
  

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


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.done {
  text-decoration:line-through;
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
