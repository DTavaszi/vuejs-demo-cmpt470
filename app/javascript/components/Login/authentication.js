import Vue from 'vue'
import HTTPService from 'HTTPService'
import { set_auth_token, remove_auth_token } from 'app.config'

const LOGIN_PATH = '/users/sign_in'
const LOGOUT_PATH = '/users/sign_out'
const GET_LOGGED_USER_PATH = '/users/sign_in'

export default {
  login(context, loginDetails) {
    console.log("Attempting login...")
    var app = context
    const authUser = {}
    HTTPService.post(LOGIN_PATH, loginDetails)
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
    HTTPService.delete(LOGOUT_PATH)
      .then(function(response) {
        remove_auth_token(context)
      })
      .catch(e => {
        console.log("Error logging out.")
        console.log(e)
      })
  },
  identifyLoggedUser(context) {
    HTTPService.get(GET_LOGGED_USER_PATH)
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
