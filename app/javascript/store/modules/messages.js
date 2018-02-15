const NUMBER_OF_EXPECTED_MESSAGES = 25

const messages = {
  state: {
    messages: [],
    messagesQuerying: false,
    token: 0,
    fetchMessagesStatus: true,
    hasPreviousMessages: true
  },
  mutations: {
    SET_MESSAGES: function(state, messages) {
      state.messages = messages
    },
    ADD_MESSAGES_AFTER: function(state, messages) {
      var filtered = messages.filter(message => !!!state.messages.find(msg => msg.id == message.id))
      state.messages = state.messages.concat(filtered)
    },
    ADD_MESSAGES_BEFORE: function(state, messages) {
      state.messages = messages.concat(state.messages)
    },
    ADD_MESSAGE: function(state, message) {
      state.messages.push(message)
    },
    SET_MESSAGES_QUERYING: function(state, messagesQuerying) {
      state.messagesQuerying = messagesQuerying
    },
    UPDATE_MESSAGE: function(state, { old_message, new_message }) {
      var index = state.messages.findIndex(el => el.token == old_message.token)

      if (index >= 0) {
        state.messages[index] = new_message
      }
    },
    SET_FETCH_MESSAGES: function(state, status) {
      state.fetchMessagesStatus = status
    },
    SET_HAS_PREVIOUS_MESSAGES: function(state, status) {
      state.hasPreviousMessages = status
    }
  },
  actions: {
    setMessages({commit}, messages) {
      commit('SET_MESSAGES', messages)

      if (messages.length < NUMBER_OF_EXPECTED_MESSAGES) {
        commit('SET_HAS_PREVIOUS_MESSAGES', false)
      } else {
        commit('SET_HAS_PREVIOUS_MESSAGES', true)
      }
    },
    addMessagesAfter({commit}, messages) {
      commit('ADD_MESSAGES_AFTER', messages)
    },
    addMessagesBefore({commit}, messages) {
      commit('ADD_MESSAGES_BEFORE', messages)

      if (messages.length == 0) {
        commit('SET_HAS_PREVIOUS_MESSAGES', false)
      }
    },
    setMessagesQuerying({commit}, messagesQuerying) {
      commit('SET_MESSAGES_QUERYING', messagesQuerying)
    },
    addMessage({commit}, message) {
      commit('ADD_MESSAGE', message)
    },
    updateMessage({commit}, payload) {
      commit('UPDATE_MESSAGE', payload)
    },
    setFetchMessages({commit}, status) {
      commit('SET_FETCH_MESSAGES', status)
    }
  },
  getters: {
    messages: state => state.messages,
    messagesQuerying: state => state.messagesQuerying,
    token: state => state.token++,
    fetchMessagesStatus: state => state.fetchMessagesStatus
  }
}

export default messages
