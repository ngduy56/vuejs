<template>
  <div class="container">
    <h3>Login</h3>
    <form @submit.prevent="handleLogin">
      <div class="form-login">
        <input
          type="text"
          class="login-input"
          :class="{ invalid: errors.username }"
          placeholder="Enter username"
          v-model="formLogin.username"
        />
        <div class="feedback-errors" v-if="errors.username">
          {{ errors.username }}
        </div>
        <input
          type="password"
          class="login-input"
          :class="{ invalid: errors.password }"
          placeholder="Enter password"
          v-model="formLogin.password"
        />
        <div class="feedback-errors" v-if="errors.password">
          {{ errors.password }}
        </div>
        <button class="btn-submit" type="sumbit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "login-page",
  data() {
    return {
      errors: {
        username: "",
        password: "",
      },
      formLogin: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      logged: "user/logged",
    }),
  },
  watch: {
    logged() {
      if (this.logged) {
        this.$router.push("/home");
      }
    },
  },
  methods: {
    ...mapActions({
      login: "user/login",
    }),
    handleLogin() {
      if (this.validate()) {
        this.login({
          identifier: this.formLogin.username,
          password: this.formLogin.password,
        });
      }
    },
    validate() {
      let isValid = true;
      this.errors = {
        username: "",
        password: "",
      };
      if (!this.formLogin.username) {
        this.errors.username = "Username is required";
        isValid = false;
      } else if (!this.validateEmail(this.formLogin.username)) {
        this.errors.username = "Username must be email";
        isValid = false;
      }
      if (this.validateEmail(this.formLogin.username)) {
        this.errors.username = "";
      }

      if (!this.formLogin.password) {
        this.errors.password = "Password is required";
        isValid = false;
      }
      return isValid;
    },
    validateEmail(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
.form-login {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.login-input {
  margin: 10px 0 8px 0;
  width: 100%;
  padding: 10px 16px;
  font-size: 14px;
  border-radius: 4px;
}
.btn-submit {
  width: 100px;
  margin-top: 30px;
  background-color: rgb(188, 246, 255);
}
.login-input.invalid {
  border: 2px solid rgb(177, 2, 2);
}
.feedback-errors {
  font-size: 13px;
  color: rgb(177, 2, 22);
}
</style>
