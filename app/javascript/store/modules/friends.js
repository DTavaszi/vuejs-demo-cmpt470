const friends = {
  state: {
    friends: [{ name: "friend1"}, { name: "friend2" }]
  },
  mutations: {
    SET_FRIENDS: function(state, friends) {
      state.friends = friends
    }
  },
  actions: {
    setFriends({commit}, friends) {
      commit('SET_FRIENDS', friends)
    }
  },
  getters: {
    friends: state => state.friends
  }
}

export default friends
