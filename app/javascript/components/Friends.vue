<template>
  <div id="friendships" v-if="friendships.length > 0">
    <div id="friends" v-if="friends.length > 0">
      <h3> Current Friends ({{ friends.length }}) </h3>
      <ul class="list-group">
        <li class="list-group-item" v-for="friend in friends">
          {{ friend }}
          <button @click="removeFriend(friend)">&times;</button>
        </li>
      </ul>
    </div>

    <div id="friend_requests" v-if="friend_requests.length > 0">
      <h3> Friend requests ({{ friend_requests.length }}) </h3>
      <ul class="list-group">
        <li class="list-group-item" v-for="friend in friend_requests">
          {{ friend }}
          <button @click="removeFriend(friend)">&times;</button>
        </li>
      </ul>
    </div>

    <div id="friends_pending" v-if="friends_pending.length > 0">
      <h3> Friends pending ({{ friends_pending.length }}) </h3>
      <ul class="list-group">
        <li class="list-group-item" v-for="friend in friends_pending">
          {{ friend }}
          <button @click="removeFriend(friend)">&times;</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import friendRequests from './Friends/friendRequests'

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
      return this.$store.getters.friends
    }
  },
  watch: {
    friendships: function(newFriends, oldFriends) {
      this.update_friendships()
    }
  },
  methods: {
    removeFriend: function(friend) {
      friendRequests.removeFriend(this, friend)
    },
    // Calculates friendship relationships. Both parties must friend each other to become friends.
    update_friendships: function() {
      const user_id = this.$store.getters.currentUser.id

      var friend_requests = this.friendships.filter(f => f.sender_id == user_id)
      var friends_pending = this.friendships.filter(f => f.recipient_id == user_id)

      const friends = friends_pending.filter(function(pending) {
        return !!friend_requests.find(request => request.recipient_id == pending.sender_id)
      })

      friend_requests = friend_requests.filter(function(request) {
        return !!friends.find(friend => friend.recipient_id != request.recipient_id)
      })

      friends_pending = friends_pending.filter(function(request) {
        return !!friends.find(friend => friend.sender_id != request.sender_id)
      })

      this.friend_requests = friend_requests
      this.friends_pending = friends_pending
      this.friends = friends
    }
  },
  created: function() {
    friendRequests.getFriends(this)
  }
}
</script>

<style scoped>
</style>
