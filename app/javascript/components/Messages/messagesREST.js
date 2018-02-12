import HTTPService from 'HTTPService'

const GET_MESSAGES_PATH = '/messages'
const CREATE_MESSAGE_PATH = '/messages'

export default {
  addMessage: function(context, message) {
    HTTPService.post(CREATE_MESSAGE_PATH, { 'message': message })
      .then(function(response) {
        context.$store.dispatch('addMessage', response.data)
      })
      .catch(error => {
        console.log(error)
      })
  },
  getMessages: function(context) {
    HTTPService.get(GET_MESSAGES_PATH)
    .then(function(response) {
      context.$store.dispatch('setMessages', response.data)
      context.$store.dispatch('setMessagesQuerying', false)
    })
    .catch(function(error) {
      console.log(error)
      context.$store.dispatch('setMessagesQuerying', false)
    })
  },
  updateMessagesRead: function(context, user) {
    HTTPService.get(SET_MESSAGES_READ_PATH, { 'user' : user })
    .then(function(response) {
      context.$store.dispatch('setMessagesRead')
    })
    .catch(error => {
      console.log(error)
    })
  }
}
