const state = () => ({
  filter: "all",
  todos: [
    {
      id: 1,
      title: "Đi chơi nào",
      completed: false,
      editing: false,
    },
    {
      id: 2,
      title: "Đi làm thôi",
      completed: false,
      editing: false,
    },
  ],
});
// getters
const getters = {
  remaining(state) {
    return state.todos.filter((todo) => !todo.completed).length;
  },
  anyRemaining(state, getters) {
    return getters.remaining != 0;
  },
  todosFiltered(state) {
    if (state == "all") {
      return state.todos;
    } else if (state.filter == "active") {
      return state.todos.filter((todo) => !todo.completed);
    } else if (state.filter == "completed") {
      return state.todos.filter((todo) => todo.completed);
    }
    return state.todos;
  },
  showClearCompletedButton(state) {
    return state.todos.filter((todo) => todo.completed).length > 0;
  },
};
// mutations
const mutations = {
  addTodo(state, todo) {
    state.todos.push({
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      editing: todo.editing,
    });
  },
  removeTodo(state, id) {
    const index = state.todos.findIndex((item) => item.id == id);
    state.todos.splice(index, 1);
  },
  updateTodo(state, todo) {
    const index = state.todos.findIndex((item) => item.id == todo.id);
    state.todos.splice(index, 1, {
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      editing: todo.editing,
    });
  },
  clearCompleted(state) {
    state.todos = state.todos.filter((todo) => !todo.completed);
  },
  changeFilter(state, filter) {
    state.filter = filter;
  },
  checkAll(state, checked) {
    state.todos.forEach((todo) => (todo.completed = checked));
  },
};
// actions
const actions = {
  addTodo({ commit }, todo) {
    commit("addTodo", todo);
  },
  removeTodo({ commit }, id) {
    commit("removeTodo", id);
  },
  updateTodo({ commit }, todo) {
    commit("updateTodo", todo);
  },
  clearCompleted({ commit }) {
    commit("clearCompleted");
  },
  changeFilter({ commit }, filter) {
    commit("changeFilter", filter);
  },
  checkAll({ commit }, checked) {
    commit("checkAll", checked);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
