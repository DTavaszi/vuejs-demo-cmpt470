import HTTPService from 'HTTPService'

const GET_MESSAGES_PATH = '/messages'
const CREATE_MESSAGE_PATH = '/messages'

const GET_MESSAGES_WITH_PATH = '/get_messages_with/'
const GET_MESSAGES_AFTER_PATH = '/get_messages_after/'
const GET_MESSAGES_BEFORE_PATH = '/get_messages_before/'

export default {
  sendMessage: function (context, message) {
    HTTPService.post(CREATE_MESSAGE_PATH, { 'message': message })
      .then(function (response) {
        context.$store.dispatch('updateMessage', { old_message: message, new_message: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  },/*
  getMessages: function(context) {
    HTTPService.get(GET_MESSAGES_PATH)
    .then(function (response) {
      context.$store.dispatch('setMessages', response.data)
      context.$store.dispatch('setMessagesQuerying', false)
    })
    .catch(function (error) {
      console.log(error)
      context.$store.dispatch('setMessagesQuerying', false)
    })
  },*/
  getMessages: function (context, user) {
    HTTPService.get(GET_MESSAGES_WITH_PATH + user.id)
    .then(function (response) {
      context.$store.dispatch('setMessages', response.data)
      context.$store.dispatch('setMessagesQuerying', false)
      context.$store.dispatch('setFetchMessages', true)
    })
    .catch(function (error) {
      context.$store.dispatch('setMessagesQuerying', false)
      if (error.response) {
        console.log(error.response)
      } else if (error.request) {
        console.log(error.request)
        context.$store.dispatch('setFetchMessages', false)
      } else {
        console.log ('Error', error.message)
      }
    })
  },
  getMessagesAfter: function (context, user, message) {
    HTTPService.get(GET_MESSAGES_AFTER_PATH + message.id)
    .then(function (response) {
      context.$store.dispatch('addMessagesAfter', response.data)
      context.$store.dispatch('setMessagesQuerying', false)
      context.$store.dispatch('setFetchMessages', true)
    })
    .catch(function (error) {
      context.$store.dispatch('setMessagesQuerying', false)
      if (error.response) {
        console.log(error.response)
      } else if (error.request) {
        console.log(error.request)
        context.$store.dispatch('setFetchMessages', false)
      } else {
        console.log ('Error', error.message)
      }
    })
  },
  getMessagesBefore: function (context, user, message) {
    HTTPService.get(GET_MESSAGES_BEFORE_PATH + message.id)
    .then(function (response) {
      context.$store.dispatch('addMessagesBefore', response.data)
      context.$store.dispatch('setMessagesQuerying', false)
      context.$store.dispatch('setFetchMessages', true)
    })
    .catch(function (error) {
      context.$store.dispatch('setMessagesQuerying', false)
      if (error.response) {
        console.log(error.response)
      } else if (error.request) {
        console.log(error.request)
        context.$store.dispatch('setFetchMessages', false)
      } else {
        console.log ('Error', error.message)
      }
    })
  }
}
