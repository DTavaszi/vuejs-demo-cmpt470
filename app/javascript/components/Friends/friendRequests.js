import HTTPService from 'HTTPService'

const GET_FRIENDS_PATH = 'IMPLEMENT ME'
const CREATE_FRIEND_PATH = 'IMPLEMENT ME'
const DELETE_FRIEND_PATH = 'IMPLEMENT ME'

export default {
  addFriend: function(context, friend) {
    HTTPService.post(CREATE_FRIEND_PATH, { "friend": friend })
      .then(function(response) {
        //context.$store.dispatch('addFriend', response.data)
      })
      .catch(e => {
        console.log(e)
      })
  },
  removeFriend: function(context, friend) {

  },
  getFriends: function(context) {
    HTTPService.get(GET_FRIENDS_PATH)
    .then(function(response) {
      context.$store.dispatch('setFriends', response.data)
    })
    .catch(function(error) {
      console.log(error)
    })
  }
}
