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
    return getters.remaining === 0;
  },
  todosFiltered(state) {
    if (state.filter == "all") {
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
// actions
const actions = {};
// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
