<template>
  <div>
    <p v-if="loggedIn">
      Hello {{ user.name }}
      <logoutButton></logoutButton>
    </p>
    <p v-else><router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
import logoutButton from './Login/logoutButton'

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
    logoutButton
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
