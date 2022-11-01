import { setAccessToken, removeAccessToken } from "@/utils/localStorage";
import axios from "axios";
// import AuthService from "../../apis/auth";

const state = () => ({
  user: {
    fullName: "",
    username: "",
  },
  logged: false,
  registerSuccess: false,
});
// getters
const getters = {
  logged(state) {
    return state.logged;
  },
  registerSuccess(state) {
    return state.registerSuccess;
  },
  getFullName(state) {
    return state.user.fullName;
  },
  getUserName(state) {
    return state.user.username;
  },
};
// mutations
const mutations = {
  LOGIN_AUTH(state, response) {
    state.logged = true;
    state.user = {
      fullName: response.data.user.fullName,
      username: response.data.user.username,
    };
  },
  LOGOUT_AUTH(state) {
    state.logged = false;
    state.user = {
      fullName: "",
      username: "",
    };
  },
  REGISTER_AUTH(state) {
    state.registerSuccess = true;
  },
};
// actions
const actions = {
  async login({ commit }, credentials) {
    // const response = await AuthService.login(credentials);
    const response = await axios.post("https://api.ezfrontend.com/auth/local", {
      identifier: credentials.identifier,
      password: credentials.password,
    });
    setAccessToken(response.data.jwt);
    commit("LOGIN_AUTH", response);
  },
  logout({ commit }) {
    removeAccessToken();
    commit("LOGOUT_AUTH");
  },
  async register({ commit }, credentials) {
    // const response = await AuthService.register(credentials);
    const response = await axios.post(
      "https://api.ezfrontend.com/auth/local/register",
      {
        email: credentials.username,
        username: credentials.username,
        password: credentials.password,
        fullName: credentials.fullName,
      }
    );
    setAccessToken(response.data.jwt);
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
