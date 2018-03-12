const users = {
  state: {
    users: [],
    usersQuerying: false
  },
  mutations: {
    ADD_USER: function(state, user) {
      state.users.push( JSON.parse( JSON.stringify(user)) ) // Fastest way to deep copy the input object
    },
    REMOVE_USER: function(state, user) {
      state.users = state.users.filter(usr => usr.id != user.id)
    },
    SET_USERS: function(state, users) {
      state.users = users
    },
    SET_USERS_QUERYING: function(state, status) {
      state.usersQuerying = status
    }
  },
  actions: {
    addUser ({commit}, user) {
      commit('ADD_USER', user)
    },
    removeUser ({commit}, user) {
      commit('REMOVE_USER', user)
    },
    setUsers({commit}, users) {
      commit('SET_USERS', users)
    },
    setUsersQuerying({commit}, status) {
      commit('SET_USERS_QUERYING', status)
    }
  },
  getters: {
    newUser: state => state.newUser,
    users: state => state.users,
    usersQuerying: state => state.usersQuerying
  }
}

export default users
