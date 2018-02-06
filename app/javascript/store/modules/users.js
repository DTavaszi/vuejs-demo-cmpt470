const users = {
  state: {
    users: []
  },
  mutations: {
    ADD_USER: function(state, user) {
      state.users.push( JSON.parse( JSON.stringify(user)) ) // Fastest way to deep copy the input object
    },
    SET_USERS: function(state, users) {
      state.users = users
    }
  },
  actions: {
    addUser ({commit}, user) {
      commit('ADD_USER', user)
    },
    setUsers({commit}, users) {
      commit('SET_USERS', users)
    }
  },
  getters: {
    newUser: state => state.newUser,
    users: state => state.users,
  }
}

export default users
