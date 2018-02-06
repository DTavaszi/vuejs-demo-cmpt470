import Vue from 'vue'
import axios from 'axios'
import { HTTP } from 'app.config'

export default {
  login(value) {
    return new Promise(function(resolve, reject) {
      HTTP.post('/users/sign_in', value)
      .then(function(response) {
        resolve(response)
      })
      .catch(function(error) {
        console.log("Server could not be reached.")
        reject(error.response.data)
      })
    })
  },
  logout() {
    return new Promise(function(resolve, reject) {
      HTTP.delete('/users/sign_out')
      .then(function(response) {
        resolve(response)
      })
      .catch(function(error) {
        console.log("Server could not be reached.")
        reject(error.response.data)
      })
    })
  }
}
