import Vue from 'vue'
import axios from 'axios'
import { HTTP } from 'app.config'

export default {
  post(url, value) {
    return new Promise(function(resolve, reject) {
      HTTP.post(url, value)
      .then(function(response) {
        resolve(response)
      })
      .catch(function(error) {
        reject(error.response.data)
      })
    })
  },
  delete(url, value) {
    return new Promise(function(resolve, reject) {
      HTTP.delete(url, value)
      .then(function(response) {
        resolve(response)
      })
      .catch(function(error) {
        reject(error.response.data)
      })
    })
  },
  get(url, value) {
    return new Promise(function(resolve, reject) {
      HTTP.get(url, value)
      .then(function(response) {
        resolve(response)
      })
      .catch(function(error) {
        reject(error.response.data)
      })
    })
  },
  put(url, value) {
    return new Promise(function(resolve, reject) {
      HTTP.put(url, value)
      .then(function(response) {
        resolve(response)
      })
      .catch(function(error) {
        reject(error.response.data)
      })
    })
  }
}
