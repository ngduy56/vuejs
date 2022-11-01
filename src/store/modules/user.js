import AuthService from "../../apis/auth";
import { setAccessToken } from "../../utils/localStorage";

const state = () => ({
  user: {},
  logged: false,
});
// getters
const getters = {
  logged(state) {
    return state.logged;
  },
};
// mutations
const mutations = {
  LOGIN_AUTH(state, response) {
    console.log(response);
    setAccessToken(response.jwt);
  },
  REGISTER_AUTH(state, response) {
    console.log(response);
    // setAccessToken(response.jwt);
  },
};
// actions
const actions = {
  async login({ commit }, credentials) {
    const response = await AuthService.login(credentials);
    commit("LOGIN_AUTH", response);
  },
  async register({ commit }, credentials) {
    const response = await AuthService.register(credentials);
    commit("REGISTER_AUTH", response);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
