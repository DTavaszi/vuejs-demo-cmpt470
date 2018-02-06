import Vue from 'vue'

import loginService from './loginService'
import { set_auth_token, remove_auth_token } from 'app.config'

export default {
  login(context, loginDetails) {
    console.log("Attempting login...")
    var app = context
    const authUser = {}
    loginService.login(loginDetails)
      .then(function(response) {
        authUser.data = response.data
        authUser.token = response.token

        set_auth_token(context, authUser)
        console.log('Logged in: ' + context.$store.getters.isLoggedIn)
        context.$router.push('/')
      })
      .catch(function(error) {
        console.log("Invalid credentials.")
        console.log(error.data)
      })
  },
  logout(context) {
    loginService.logout()
      .then(function(response) {
        remove_auth_token(context)
      })
      .catch(e => {
        console.log("Error logging out.")
        console.log(e)
      })
  },
  identifyLoggedUser(context) {
    loginService.getLoggedUser()
      .then(function(response) {
        context.$store.dispatch('setLoggedIn', true)
        context.$store.dispatch('setCurrentUser', response.data)
      })
      .catch(function(error) {
        console.log("Not logged in.")
        context.$store.dispatch('setLoggedIn', false)
      })
  }
}
