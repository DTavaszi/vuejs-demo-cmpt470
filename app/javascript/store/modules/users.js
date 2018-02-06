const users = {
  state: {
    users: [],
    newUser: {
      name: '',
      admin: false
    },
    currentUser: {
      name: 'Default',
      admin: false
    }
  },
  mutations: {
    ADD_USER: function(state) {
      state.users.push({
        name: state.newUser.name,
        admin: state.newUser.admin
      })
    },
    GET_USER: function(state, user) {
      state.newUser = user
    },
    SET_USERS: function(state, users) {
      state.users = users
    }
  },
  actions: {
    getUser ({commit}, user) {
      commit('GET_USER')
    },
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
    currentUser: state => state.currentUser
  }
}

export default users
