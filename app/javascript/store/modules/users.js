const users = {
  state: {
    users: [],
    newUser: {
      name: '',
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
    }
  },
  actions: {
    getUser ({commit}, user) {
      commit('GET_USER')
    },
    addUser ({commit}, user) {
      commit('ADD_USER', user)
    }
  },
  getters: {
    newUser: state => state.newUser,
    users: state => state.users
  }
}

export default users
