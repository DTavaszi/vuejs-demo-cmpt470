const messages = {
  state: {
    messages: [],
    querying: false
  },
  mutations: {
    SET_MESSAGES: function(state, messages) {
      state.messages = messages
    },
    ADD_MESSAGES: function(state, messages) {

    },
    ADD_MESSAGE: function(state, message) {

    },
    SET_QUERYING: function(state, querying) {
      state.querying = querying
    }
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
    setQuerying({commit}, querying) {
      commit('SET_QUERYING', querying)
    }
  },
  getters: {
    messages: state => state.messages,
    querying: state => state.querying
  }
}

export default messages
