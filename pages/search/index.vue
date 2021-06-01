<template>
  <div>
    <div class="columns is-gapless is-multiline is-mobile">
      <div class="column is-12">
        <h1 class="is-size-4 has-text-black">
          <span class="has-text-weight-medium">Hi {{ loggedInUser.first_name }}</span>, <span class="has-text-weight-light">
                        Welcome Back!</span>
        </h1>
      </div>
      <div class="column is-12">
        <nav class="breadcrumb mt-1 mb-0" aria-label="breadcrumbs">
          <ul>
            <li><NuxtLink class="is-size-7 has-text-weight-medium has-text-link"
                          to="dashboard.html">Home</NuxtLink></li>
            <li class="is-size-7 has-text-weight-medium is-active"><a href="dashboard.html"
                                                                      aria-current="page">Address</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="columns is-variable is-3 is-desktop">
      <div class="column">
        <div class="card has-background-white has-text-black">
          <header class="card-header">
            <p class="card-header-title">
              Search
            </p>
          </header>
          <div class="card-content">
            <template>
    <Search />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  layout: 'auth',
  computed: {
     ...mapGetters([
              'isAuthenticated',
              'loggedInUser',
      'isAuthenticated',
      'loggedInUser',
    ]),
  },

  created() {
    // this.loadSearch();
  },
}
</script>
