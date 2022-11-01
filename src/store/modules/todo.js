import axios from "axios";
const state = () => ({
  filter: "all",
  total: [],
  todos: [],
  totalPage: 1,
  pageNum: 1,
  limit: 10,
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
  pageNum(state) {
    return state.pageNum;
  },
  totalPageNum(state) {
    let rs = Math.ceil(state.total.length / state.limit);
    return rs;
  },
};
// mutations
/// viet hoa noi nhau CHANGE_PAGE_NUMBER
const mutations = {
  ADD_TODO(state, todo) {
    state.todos.push({
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      editing: todo.editing,
    });
  },
  REMOVE_TODO(state, id) {
    const index = state.todos.findIndex((item) => item.id == id);
    state.todos.splice(index, 1);
  },
  UPDATE_TODO(state, todo) {
    const index = state.todos.findIndex((item) => item.id == todo.id);
    state.todos.splice(index, 1, {
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      editing: todo.editing,
    });
  },
  CLEAR_COMPLETED(state) {
    state.todos = state.todos.filter((todo) => !todo.completed);
  },
  CHANGE_FILTER(state, filter) {
    state.filter = filter;
  },
  CHECK_ALL(state, checked) {
    state.todos.forEach((todo) => (todo.completed = checked));
  },
  FETCH_DATA(state, todos) {
    state.total = todos;
    state.todos = state.total.slice(0, state.limit);
  },
  CHANGE_PAGE(state, page) {
    state.pageNum = page;
    let statIndex = state.limit * (state.pageNum - 1);
    let endIndex = statIndex + state.limit;
    state.todos = state.total.slice(statIndex, endIndex);
  },
};
// actions
const actions = {
  changePage({ commit }, page) {
    commit("CHANGE_PAGE", page);
  },
  async fetchData({ commit }) {
    await axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => {
        commit("FETCH_DATA", response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  },
  addTodo({ commit }, todo) {
    commit("ADD_TODO", todo);
  },
  removeTodo({ commit }, id) {
    commit("REMOVE_TODO", id);
  },
  updateTodo({ commit }, todo) {
    commit("UPDATE_TODO", todo);
  },
  clearCompleted({ commit }) {
    commit("CLEAR_COMPLETED");
  },
  changeFilter({ commit }, filter) {
    commit("CHANGE_FILTER", filter);
  },
  checkAll({ commit }, checked) {
    commit("CHECK_ALL", checked);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
