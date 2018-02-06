import HTTPService from 'HTTPService'

const CREATE_USER_PATH = '/users/admin'
const DELETE_USER_PATH = '/users/admin'

export default {
  addUser: function(context, user) {
    HTTPService.post(CREATE_USER_PATH, { "user": user })
      .then(function(response) {
        context.$store.dispatch('addUser', response.data)
      })
      .catch(e => {
        console.log(e)
      })
  },
  removeUser: function(context, user) {
    HTTPService.delete(DELETE_USER_PATH + '/' + user.id)
      .then(function(response) {
        context.$store.dispatch('removeUser', user)
      })
      .catch(e => {
        console.log(e)
      })
  }
}
