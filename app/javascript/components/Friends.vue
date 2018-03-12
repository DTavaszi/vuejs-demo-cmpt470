<template>
  <div>
    <userFriends :friends="friends"></userFriends>
    <userRequests :friend_requests="friend_requests"></userRequests>
    <userPending :friends_pending="friends_pending"></userPending>
    <findByEmail></findByEmail>
  </div>
</template>

<script>
import friendsREST from './Friends/friendsREST'
import userFriends from './Friends/userFriends'
import userRequests from './Friends/userRequests'
import userPending from './Friends/userPending'
import findByEmail from './Friends/findByEmail'

export default {
  data: function() {
    return {
      friend_requests: [],
      friends_pending: [],
      friends: []
    }
  },
  computed: {
    friendships: function() {
      return this.$store.getters.friendships
    }
  },
  watch: {
    friendships: function(newFriends, oldFriends) {
      this.updateFriendships()
    }
  },
  methods: {
    // Calculates friendship relationships. Both parties must friend each other to become friends.
    updateFriendships: function() {
      const user_id = this.$store.getters.currentUser.id

      var friend_requests = this.friendships.filter(f => f.sender_id == user_id)
      var friends_pending = this.friendships.filter(f => f.recipient_id == user_id)

      const friends = friends_pending.filter(function(pending) {
        return !!friend_requests.find(request => request.recipient_id == pending.sender_id)
      })

      if (friends.length > 0) {
        friend_requests = friend_requests.filter(function(request) {
          return !(!!friends.find(friend => friend.sender_id == request.recipient_id))
        })

        friends_pending = friends_pending.filter(function(pending) {
          return !(!!friends.find(friend => friend.sender_id == pending.sender_id))
        })
      }

      // Set to empty array, otherwise it will be undefined
      this.friend_requests = (!!friend_requests ? friend_requests : [])
      this.friends_pending = (!!friends_pending ? friends_pending : [])
      this.friends = (!!friends ? friends : [])
    },

  },
  created: function() {
    friendsREST.getFriends(this)
  },
  components: {
    userFriends,
    userRequests,
    userPending,
    findByEmail
  }
}
</script>

<style scoped>
</style>
