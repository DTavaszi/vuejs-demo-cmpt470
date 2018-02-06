import Vue from 'vue'
import HTTPService from 'HTTPService'

const CREATE_USER_PATH = '/users/admin'

export default {
  addUser: function(context, user) {
    HTTPService.post(CREATE_USER_PATH, { "user": user })
      .then(function(response) {
        context.$store.dispatch('addUser', response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }
}
