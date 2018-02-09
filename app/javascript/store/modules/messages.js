const messages = {
  state: {
    messages: []
  },
  mutations: {
    SET_MESSAGES: function(state, messages) {
      state.messages = messages
    },
    ADD_MESSAGES: function(state, messages) {

    },
    ADD_MESSAGE: function(state, message) {

    }
  },
  actions: {
    setMessages({commit}, messages) {
      commit('SET_MESSAGES, messages')
    },
    addMessages({commit}, messages) {
      commit('ADD_MESSAGES', messages)
    },
    addMessage({commit}, message) {
      commit('ADD_MESSAGE', message)
    }
  },
  getters: {
    messages: state => state.messages
  }
}
