<template>
  <span>
    <span :class="{ hidden: !searching }" @click="toggle(false)" style="position: absolute; z-index: 0; width: 100%; height: 100vh; top: 0; left: 0" />
    <span>
      <v-text-field v-model="email" @focus="toggle(true)" light solo prepend-icon="search" placeholder="Find friends" style="max-width: 500px; min-width: 128px"></v-text-field>
      <ul  class="search-list" :class="{ hidden: !searching }">
        <li v-for="user in foundUsers" class="search-user">
          <span class="search-user-email">
            {{ user.email }}
            <span v-if="isCurrentUser(user)" class="search-user-self">
              (you)
            </span>
          </span>
          <v-btn v-if="isFriend(user)" style="float: right;" color="red" @click="removeFriend(user)" small>✖ Friend</v-btn>
          <v-btn v-else-if="isRequesting(user)" style="float: right;" color="blue" @click="addFriend(user)" small> Requested </v-btn>
          <v-btn v-else-if="isPending(user)" style="float: right;" color="green" @click="addFriend(user)" small>&plus; Accept</v-btn>
          <v-btn v-else style="float: right;" color="blue" @click="addFriend(user)" small>&plus; Friend</v-btn>
        </li>
      </ul>
    </span>
  </span>
</template>

<script>
import friendsREST from './friendsREST'

export default {
  data: function() {
    return {
      email: '',
      message: 'Enter an email address',
      foundUsers: [],
      searching: false
    }
  },
  computed: {
    users: function() {
      return this.$store.getters.users
    }
  },
  watch: {
    email: function(newEmail, oldEmail) {
      this.findUsersByEmail()
    },
    users: function(newUsers, oldUsers) {
      this.findUsersByEmail()
    }
  },
  methods: {
    toggle: function (status) {
      this.searching = status
    },
    // Implement throttler like lodash _.debounce
    findUsersByEmail: function() {
      this.foundUsers = this.users.filter(usr => usr.email.match(this.email))
    },
    addFriend: function(user) {
      friendsREST.addFriend(this, user)
    },
    removeFriend: function(user) {
      var friend = this.isFriend(user)
      friendsREST.removeFriend(this, friend)
    },
    isFriend: function(user) {
      return this.$store.getters.current_friends.find(friend => friend.sender_id == user.id)
    },
    isRequesting: function(user) {
      return this.$store.getters.friend_requests.find(friend => friend.recipient_id == user.id)
    },
    isPending: function(user) {
      return this.$store.getters.friends_pending.find(friend => friend.sender_id == user.id)
    },
    isCurrentUser: function(user) {
      return this.$store.getters.currentUser.id == user.id
    }
  }
}
</script>

<style scoped>
</style>
