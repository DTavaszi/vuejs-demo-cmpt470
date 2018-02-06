<template>
  <div>
    <h1>Login Page</h1>
    <form v-on:submit.prevent="loginUser()">
      <input type="text" placeholder="Username" v-model="loginDetails.username">
      <input type="password" placeholder="Password" v-model="loginDetails.password">
      <button type="submit" value="login"> Login </button>
    </form>
    <router-link to="/">Go back</router-link>
  </div>
</template>

<script>
import loginService from './Login/loginService'
import { set_auth_token } from 'app.config'

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
          authUser.data = response.data
          authUser.token = response.token

          set_auth_token(app, authUser)
          app.$router.push('/')
        })
        .catch(function(error) {
          console.log("Invalid credentials.")
          console.log(error.data)
        })
      console.log("Attempting login...")
    }
  }
}
</script>

<style scoped>
</style>
