const friends = {
  state: {
    friends: [],
    current_friends: [],
    friends_pending: [],
    friend_requests: [],
    friendsQuerying: false
  },
  mutations: {
    SET_FRIENDS: function(state, friends) {
      state.friends = friends
    },
    REMOVE_FRIEND: function(state, friend) {
      state.friends = state.friends.filter(function(f) {
        return !(((f.recipient_id == friend.recipient_id) && (f.sender_id == friend.sender_id)) ||
                ((f.recipient_id == friend.sender_id) && (f.sender_id == friend.recipient_id)))
      })
    },
    ADD_FRIEND: function(state, friend) {
      state.friends.push( JSON.parse( JSON.stringify(friend)) ) // Fastest way to deep copy the input object
    },
    SET_CURRENT_FRIENDS: function(state, friends) {
      state.current_friends = friends
    },
    SET_FRIENDS_PENDING: function(state, friends) {
      state.friends_pending = friends
    },
    SET_FRIEND_REQUESTS: function(state, friends) {
      state.friend_requests = friends
    },
    SET_FRIENDS_QUERYING: function(state, status) {
      state.friendsQuerying = status
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
    },
    setCurrentFriends({commit}, friends) {
      commit('SET_CURRENT_FRIENDS', friends)
    },
    setFriendsPending({commit}, friends) {
      commit('SET_FRIENDS_PENDING', friends)
    },
    setFriendRequests({commit}, friends) {
      commit('SET_FRIEND_REQUESTS', friends)
    },
    setFriendsQuerying({commit}, status) {
      commit('SET_FRIENDS_QUERYING', status)
    }
  },
  getters: {
    friendships: state => state.friends,
    current_friends: state => state.current_friends,
    friends_pending: state => state.friends_pending,
    friend_requests: state => state.friend_requests,
    friendsQuerying: state => state.friendsQuerying
  }
}

export default friends
