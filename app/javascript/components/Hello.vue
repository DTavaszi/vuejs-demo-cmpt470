<template>
  <div>
    <p v-if="loggedIn">
      Hello {{ user.username }}. Not you?
      <logoutButton></logoutButton>
    </p>
    <p v-else>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </p>
    <Status></Status>
  </div>
</template>

<script>
import logoutButton from './Login/logoutButton'
import Status from './Users/Status'

export default {
  computed: {
    user: function() {
      return this.$store.getters.currentUser
    },
    loggedIn: function() {
      return this.$store.getters.isLoggedIn
    }
  },
  components: {
    logoutButton,
    Status
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
