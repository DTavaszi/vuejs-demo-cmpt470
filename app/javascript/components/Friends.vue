<template>
  <div id="friends" v-if="friends.length > 0">
    <h3> Current Friends ({{ friends.length }}) </h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="friend in friends">
        {{ friend }}
        <button @click="removeFriend(friend)">&times;</button>
      </li>
    </ul>
  </div>
</template>

<script>
import friendRequests from './Friends/friendRequests'

export default {
  computed: {
    friends: function() {
      return this.$store.getters.friends
    }
  },
  methods: {
    removeFriend: function(friend) {
      friendRequests.removeFriend(this, friend)
    }
  },
  created: function() {
    friendRequests.getFriends(this)
  }
}
</script>

<style scoped>
</style>
