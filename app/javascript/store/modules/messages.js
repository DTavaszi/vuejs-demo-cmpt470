const messages = {
  state: {
    messages: [],
    messagesQuerying: false
  },
  mutations: {
    SET_MESSAGES: function(state, messages) {
      state.messages = messages
    },
    ADD_MESSAGES: function(state, messages) {

    },
    ADD_MESSAGE: function(state, message) {

    },
    SET_MESSAGES_QUERYING: function(state, messagesQuerying) {
      state.messagesQuerying = messagesQuerying
    },
  },
  actions: {
    setMessages({commit}, messages) {
      commit('SET_MESSAGES', messages)
    },
    addMessages({commit}, messages) {
      commit('ADD_MESSAGES', messages)
    },
    addMessage({commit}, message) {
      commit('ADD_MESSAGE', message)
    },
    setMessagesQuerying({commit}, messagesQuerying) {
      commit('SET_QUERYING', messagesQuerying)
    }
  },
  getters: {
    messages: state => state.messages,
    messagesQuerying: state => state.messagesQuerying
  }
}

export default messages
