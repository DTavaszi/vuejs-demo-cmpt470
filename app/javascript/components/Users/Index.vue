<template>
  <div id="users" v-if="users.length > 0">
    <h3> Current Users ({{ users.length }}) </h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="user in users">
        {{ user }}
        <button @click="removeUser(user)">&times; User</button>
        <button @click="addFriend(user)">&plus; Friend</button>
      </li>
    </ul>
  </div>
</template>

<script>
import userRequests from './userRequests'
import friendRequests from 'components/Friends/friendRequests'

export default {
  computed: {
    users: function() {
      return this.$store.getters.users
    }
  },
  methods: {
    removeUser: function(user) {
      userRequests.removeUser(this, user)
    },
    addFriend: function(user) {
      friendRequests.addFriend(this, user)
    }
  },
  created: function() {
    userRequests.getUsers(this)
  }
}
</script>

<style scoped>
</style>
