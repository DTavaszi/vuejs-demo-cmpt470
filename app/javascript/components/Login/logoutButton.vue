<template>
  <button @click="logoutUser()"> Logout </button>
</template>

<script>
import loginService from './loginService'
import { remove_auth_token } from 'app.config'

export default {
  methods: {
    logoutUser: function() {
      var app = this
      loginService.logout()
        .then(function(response) {
          remove_auth_token(app)
        })
        .catch(e => {
          console.log("Error logging out.")
          console.log(e)
        })
      console.log("Attempting logout...")
    }
  }
}
</script>

<style scoped>
</style>
