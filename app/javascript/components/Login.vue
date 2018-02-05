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
      .then(function(res) {
        authUser.data = res.data
        authUser.token = res.token
        window.localStorage.setItem('lbUser', authUser)
        // Override state - otherwise it won't know it's logged in until window refreshes
        app.$store.state.isLoggedIn = true
        console.log(authUser.data + " - " + authUser.token)
        console.log("logged in: " + app.$store.state.isLoggedIn)
      })
      .catch(function(err) {
        console.log(err.data)
      })

      console.log("please wait...")
    },
    logoutUser: function() {
      console.log("logging out")
      localStorage.removeItem('lbUser')

      // Override state - otherwise it won't know it's logged out until window refreshes
      this.$store.state.isLoggedIn = false
      console.log("logged in: " + this.$store.state.isLoggedIn)
    }
  }
}
</script>

<style scoped>
</style>
