<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">Home</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          :to="{ name: 'minipage' }"
          class="nav-item"
          active-class="active"
          tag="li"
          exact
        >
          <a class="nav-link">Miniex</a>
        </router-link>
        <router-link :to="{ name: 'todopage' }" tag="li" class="nav-item">
          <a class="nav-link">Todo</a>
        </router-link>
        <router-link :to="{ name: 'loginpage' }" tag="li" class="nav-item">
          <a class="nav-link">Login</a>
        </router-link>
        <router-link :to="{ name: 'registerpage' }" tag="li" class="nav-item">
          <a class="nav-link">Register</a>
        </router-link>
        <router-link :to="{ name: 'homepage' }" tag="li" class="nav-item">
          <a class="nav-link">Home</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar-top",
};
</script>

<style></style>
