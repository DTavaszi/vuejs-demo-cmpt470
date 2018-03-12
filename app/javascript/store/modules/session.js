const session = {
  state: {
    session: {
      username: '',
      password: '',
      authenticated: false
    }
  },
  mutations: {
    LOGIN: function(state) {
      state.session.username = 'LOGIN'
      state.session.password = 'abcd'
      }
    },
    LOGOUT: function(state) {
      state.session = null
    }
  },
  actions: {
    login ({commit}, session) {
      commit('LOGIN')
    },
    addUser ({commit}, session) {
      commit('LOGOUT', user)
    }
  },
  getters: {
    newUser: state => state.newUser,
    users: state => state.users
  }
}

export default session
