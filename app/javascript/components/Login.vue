<template>
  <div>
    <h1>Login Page</h1>
    <form v-on:submit.prevent="loginUser()">
      <input type="text" placeholder="Username" v-model="loginDetails.username">
      <input type="password" placeholder="Password" v-model="loginDetails.password">
      <button type="submit" value="login"> Login </button>
    </form>
    <button @click="logoutUser()"> Logout </button>
    <router-link to="/">Go back</router-link>
  </div>
</template>

<script>
import loginService from './Login/loginService'
import { remove_auth_token, set_auth_token } from 'app.config'
export default {
  data() {
    return {
      loginDetails: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    loginUser: function() {
      const authUser = {}
      var app = this
      loginService.login(app.loginDetails)
      .then(function(response) {
        console.log("Response data:")
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        console.log("---------------------------------")
        authUser.data = response.data
        authUser.token = response.token
        //window.localStorage.setItem('lbUser', authUser)
        set_auth_token(authUser)

        // Override state - otherwise it won't know it's logged in until window refreshes
        app.$store.state.isLoggedIn = true
        console.log(authUser.data + " - " + authUser.token)
        console.log("Logged in: " + app.$store.state.isLoggedIn)
      })
      .catch(function(error) {
        console.log("Invalid credentials.")
        console.log(error.data)
      })

      console.log("Attempting login. Please wait...")
    },
    logoutUser: function() {
      var app = this
      console.log("Logging out.")
      loginService.logout()
      .then(function(response) {
        remove_auth_token()
        app.$store.state.isLoggedIn = false
        console.log("Logged in: " + app.$store.state.isLoggedIn)
      })
      .catch(e => {
        console.log("Error logging out")
        console.log(e)
      })

      console.log("Attempting logout. Please wait...")
    }
  }
}
</script>

<style scoped>
</style>
