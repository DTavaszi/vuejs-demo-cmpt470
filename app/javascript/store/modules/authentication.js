const authentication = {
  state: {
    currentUser: {
      username: 'Default',
      status: '',
      email: 'email',
      admin: false
    },
    isLoggedIn: false
  },
  mutations: {
    SET_CURRENT_USER: function(state, user) {
      state.currentUser = user
    },
    SET_LOGGED_IN: function(state, status) {
      state.isLoggedIn = status
    }
  },
  actions: {
    setCurrentUser({commit}, user) {
      commit('SET_CURRENT_USER', user)
    },
    setLoggedIn({commit}, status) {
      commit('SET_LOGGED_IN', status)
    }
  },
  getters: {
    currentUser: state => state.currentUser,
    isLoggedIn: state => state.isLoggedIn
  }
}

export default authentication
