import {
  setAccessToken,
  removeAccessToken,
  setUser,
  removeUser,
  getUser,
} from "@/utils/localStorage";
import axios from "axios";

const state = () => ({
  user: {
    fullName: getUser() ? getUser().fullName : "",
    username: getUser() ? getUser().username : "",
  },
  logged: false,
});
// getters
const getters = {
  logged(state) {
    return state.logged;
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
};
// actions
const actions = {
  async login({ commit }, credentials) {
    try {
      const response = await axios.post(
        "https://api.ezfrontend.com/auth/local",
        {
          identifier: credentials.identifier,
          password: credentials.password,
        }
      );
      if (response.status === 200) {
        setAccessToken(response.data.jwt);
        let user = {
          fullName: response.data.user.fullName,
          username: response.data.user.username,
        };
        setUser(user);
        commit("LOGIN_AUTH", response);
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  logout({ commit }) {
    removeAccessToken();
    removeUser();
    commit("LOGOUT_AUTH");
  },
  async register({ commit }, credentials) {
    try {
      const response = await axios.post(
        "https://api.ezfrontend.com/auth/local/register",
        {
          email: credentials.username,
          username: credentials.username,
          password: credentials.password,
          fullName: credentials.fullName,
        }
      );
      if (response.status === 200) {
        setAccessToken(response.data.jwt);
        let user = {
          fullName: response.data.user.fullName,
          username: response.data.user.username,
        };
        setUser(user);
        commit("LOGIN_AUTH", response);
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
