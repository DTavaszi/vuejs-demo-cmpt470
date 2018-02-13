import axios from 'axios';

//const API_ENDPOINT = "http://localhost:3000"
const GRAVATAR_URL = "https://www.gravatar.com/avatar/"
const API_ENDPOINT = "https://cmpt470-vuejs.herokuapp.com/"

const HEADERS = function() {
  const headers = {
    'Accept': 'application/json',
  }

  return headers
}

export const HTTP = axios.create({
  baseURL: API_ENDPOINT,
  HEADERS
})

export const remove_auth_token = function(context) {
  console.log("Logged out.")
  context.$store.dispatch('setLoggedIn', false)
}

export const set_auth_token = function(context, token) {
  console.log("Logged in.")
  context.$store.dispatch('setLoggedIn', true)
}
