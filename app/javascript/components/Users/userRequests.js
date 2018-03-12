import HTTPService from 'HTTPService'

const GET_USERS_PATH = '/users/admin'
const CREATE_USER_PATH = '/users/admin'
const DELETE_USER_PATH = '/users/admin'
const UPDATE_STATUS_PATH = '/users'

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
  },
  getUsers: function(context) {
    HTTPService.get(GET_USERS_PATH)
    .then(function(response) {
      context.$store.dispatch('setUsers', response.data)
      context.$store.dispatch('setUsersQuerying', false)
    })
    .catch(function(error) {
      context.$store.dispatch('setUsersQuerying', false)
      console.log(error)
    })
  },
  updateUser: function(context, user) {
    HTTPService.put(UPDATE_STATUS_PATH, { "user": user })
    .then(function(response) {
      context.$store.dispatch('setCurrentUser', response.data  )
    })
    .catch(function(error) {
      console.log(error)
    })
  }
}
