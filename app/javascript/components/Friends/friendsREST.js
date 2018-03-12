import HTTPService from 'HTTPService'

const GET_FRIENDS_PATH = '/friends'
const CREATE_FRIEND_PATH = '/friends'
const DELETE_FRIEND_PATH = '/friends'

export default {
  addFriend: function(context, user) {
    HTTPService.post(CREATE_FRIEND_PATH, { "user": user })
      .then(function(response) {
        context.$store.dispatch('addFriend', response.data)
      })
      .catch(e => {
        console.log(e)
      })
  },
  removeFriend: function(context, friend) {
    HTTPService.delete(DELETE_FRIEND_PATH + '/' + friend.id)
      .then(function(response) {
        context.$store.dispatch('removeFriend', friend)
      })
      .catch(e => {
        console.log(e)
      })
  },
  getFriends: function(context) {
    HTTPService.get(GET_FRIENDS_PATH)
    .then(function(response) {
      context.$store.dispatch('setFriends', response.data)
      context.$store.dispatch('setFriendsQuerying', false)
    })
    .catch(function(error) {
      context.$store.dispatch('setFriendsQuerying', false)
      console.log(error)
    })
  }
}
