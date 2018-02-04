import Vue from 'vue'
import axios from 'axios'
import { API_ENDPOINT, getHeader } from 'app.config'

export default {
  login(value, cb) {
    return new Promise(function(resolve, reject) {
      axios.post(API_ENDPOINT + '/auth/login', value, {
        headers: {
          'Content-Type': 'application/json' // Force json response
        }
      })
      .then(function(res) {
        console.log("result object keys: " + Object.keys(res));
        resolve(res);
      })
      .catch(function(err) {
        reject(err.response.data)
      })
    })
  }
}
