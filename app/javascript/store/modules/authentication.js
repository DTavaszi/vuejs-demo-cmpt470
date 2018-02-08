const authentication = {
  state: {
    currentUser: {
      id: -1,
      username: 'Default',
      status: 'default status',
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
    },
    RESET_STATUS: function(state) {
      state.currentUser.status = state.currentUser.status
    }
  },
  actions: {
    setCurrentUser({commit}, user) {
      commit('SET_CURRENT_USER', user)
    },
    setLoggedIn({commit}, status) {
      commit('SET_LOGGED_IN', status)
    },
    resetStatus({commit}) {
      commit('RESET_STATUS')
    }
  },
  getters: {
    currentUser: state => state.currentUser,
    isLoggedIn: state => state.isLoggedIn,
    currentStatus: state => state.currentUser.status
  }
}

export default authentication
