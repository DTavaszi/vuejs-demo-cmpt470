import axios from 'axios';

// export const AUTH_TOKEN = 'lbUser'

//const API_ENDPOINT = "http://localhost:3000"
const API_ENDPOINT = "https://cmpt470-vuejs.herokuapp.com/"

const HEADERS = function() {
  // const tokenData = JSON.parse(window.localStorage.getItem(AUTH_TOKEN))
  const headers = {
    'Accept': 'application/json',
    // 'Authorization': 'Bearer' + tokenData.access_token
  }

  return headers
}

export const HTTP = axios.create({
  baseURL: API_ENDPOINT,
  HEADERS
})

export const remove_auth_token = function(context) {
  console.log("Logged out.")
  // window.localStorage.removeItem(AUTH_TOKEN)
  context.$store.dispatch('setLoggedIn', false)
}

export const set_auth_token = function(context, token) {
  console.log("Logged in.")
  // window.localStorage.setItem(AUTH_TOKEN, token)
  context.$store.dispatch('setLoggedIn', true)
}
