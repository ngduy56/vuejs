<template>
  <div>
    <h3>Welcom {{ fullName }} has {{ username }} to</h3>
    <button @click="handleLogout">Log out</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      logged: "user/logged",
      fullName: "user/getFullName",
      username: "user/getUserName",
    }),
  },
  watch: {
    logged() {
      if (!this.logged) {
        this.$router.push("/login");
      }
    },
  },
  methods: {
    ...mapActions({ logout: "user/logout" }),
    handleLogout() {
      this.logout();
    },
  },
};
</script>

<style></style>
