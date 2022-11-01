<template>
  <div class="container">
    <h3>Register</h3>
    <form @submit.prevent="handleRegister">
      <div>
        <input
          type="text"
          class="login-input"
          placeholder="Enter username"
          v-model="username"
        />
        <input
          type="password"
          class="login-input"
          placeholder="Enter password"
          v-model="password"
        />
        <input
          type="text"
          class="login-input"
          placeholder="Enter full name"
          v-model="fullName"
        />
        <button class="btn-submit" type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "login-page",
  data() {
    return {
      username: "",
      password: "",
      fullName: "",
    };
  },
  methods: {
    ...mapActions({
      login: "user/register",
    }),
    handleRegister() {
      this.login({
        email: this.username,
        username: this.username,
        password: this.password,
        fullName: this.fullName,
      });
    },
  },
};
</script>

<style>
.container {
  max-width: 600px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
.login-input {
  margin-top: 10px;
  max-width: 500px;
  width: 100%;
  padding: 10px 16px;
  font-size: 14px;
  margin-bottom: 16px;
  border-radius: 4px;
}
.btn-submit {
  width: 100px;
  background-color: rgb(188, 246, 255);
}
</style>
