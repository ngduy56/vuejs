<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">Home</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          :to="{ name: 'minipage' }"
          tag="li"
          exact
          class="nav-item active"
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
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar-top",
};
</script>

<style></style>
