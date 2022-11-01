<template>
  <div class="todo-item">
    <div class="todo-item-left">
      <input type="checkbox" v-model="completed" @change="updateTodo" />
      <div
        v-if="!editing"
        @dblclick="editTodo"
        @click="navigateChild(id)"
        class="todo-item-label"
        :class="{ completed: completed }"
      >
        {{ title }}
      </div>
      <input
        v-else
        class="todo-item-edit"
        type="text"
        v-model="title"
        @blur="updateTodo"
        @keyup.enter="updateTodo"
        @keyup.esc="cancelEdit"
        v-focus
      />
    </div>
    <div class="remove-item" @click="removeTodo">&times;</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "todo-item",
  props: {
    todo: {
      type: Object,
      required: true,
    },
    checkAll: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      id: this.todo.id,
      title: this.todo.title,
      completed: this.todo.completed,
      editing: this.todo.editing,
      beforeEdit: "",
    };
  },
  watch: {
    checkAll() {
      this.completed = this.checkAll ? true : this.todo.completed;
    },
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },
  methods: {
    ...mapActions({
      remove: "todo/removeTodo",
      update: "todo/updateTodo",
    }),
    removeTodo() {
      this.remove(this.id);
    },
    updateTodo() {
      if (this.title.trim() == "") {
        this.title = this.beforeEdit;
      }
      this.editing = false;
      this.update({
        id: this.id,
        title: this.title,
        completed: this.completed,
        editing: this.editing,
      });
    },
    navigateChild(id) {
      this.$router.push({ name: "detailpage", params: { id: id } });
    },
    editTodo() {
      this.beforeEdit = this.title;
      this.editing = true;
    },
    cancelEdit() {
      this.title = this.beforeEdit;
      this.editing = false;
    },
  },
};
</script>

<style scoped>
.todo-item {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.remove-item {
  cursor: pointer;
  margin-left: 14px;
}
.remove-item:hover {
  color: black;
}
.todo-item:hover {
  cursor: pointer;
}
.todo-item-left {
  display: flex;
  align-items: center;
}
.todo-item-label {
  padding: 10px;
  border: 1px solid white;
  margin-left: 12px;
}
.todo-item-edit {
  font-size: 16px;
  color: #2c3e50;
  margin-left: 12px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.todo-item-edit:focus {
  outline: none;
}
.completed {
  text-decoration: line-through;
  color: grey;
}
</style>
