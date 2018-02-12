import HTTPService from 'HTTPService'

const GET_MESSAGES_PATH = '/messages'
const CREATE_MESSAGE_PATH = '/messages'

export default {
  addMessage: function(context, message) {
    HTTPService.post(CREATE_MESSAGE_PATH, { "message": message })
      .then(function(response) {
        context.$store.dispatch('addMessage', response.data)
      })
      .catch(e => {
        console.log(e)
      })
  },
  getMessages: function(context) {
    HTTPService.get(GET_MESSAGES_PATH)
    .then(function(response) {
      context.$store.dispatch('setMessages', response.data)
      context.$store.dispatch('setQuerying', false)
    })
    .catch(function(error) {
      console.log(error)
      context.$store.dispatch('setQuerying', false)
    })
  }
}
