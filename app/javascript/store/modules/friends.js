const friends = {
  state: {
    friends: []
  },
  mutations: {
    SET_FRIENDS: function(state, friends) {
      state.friends = friends
    },
    REMOVE_FRIEND: function(state, friend) {
      state.friends = state.friends.filter(frnd => frnd.id != friend.id)
    },
    ADD_FRIEND: function(state, friend) {
      state.friends.push( JSON.parse( JSON.stringify(friend)) ) // Fastest way to deep copy the input object
    }
  },
  actions: {
    setFriends({commit}, friends) {
      commit('SET_FRIENDS', friends)
    },
    removeFriend({commit}, friend) {
      commit('REMOVE_FRIEND', friend)
    },
    addFriend({commit}, friend) {
      commit('ADD_FRIEND', friend)
    }
  },
  getters: {
    friends: state => state.friends
  }
}

export default friends
