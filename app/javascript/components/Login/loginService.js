import Vue from 'vue'
import axios from 'axios'
import { API_ENDPOINT, getHeader } from 'app.config'

export default {
  login(value, cb) {
    return new Promise(function(resolve, reject) {
      axios.post(API_ENDPOINT + '/auth/login', value)
      .then(function(res) {
        resolve(res.data);
      })
      .catch(function(err) {
        reject(err.response.data)
      })
    })
  }
}
