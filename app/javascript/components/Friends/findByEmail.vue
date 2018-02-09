<template>
  <div>
    <p>
      Search for a user
    </p>
    <p> {{ message }} </p>
    <input v-model="email" placeholder="Email">
    <ul>
      <li v-for="user in foundUsers">
        {{ user }}
        <button @click="addFriend(user)">&plus; Friend</button>
      </li>
    </ul>

  </div>
</template>

<script>
import friendsREST from './friendsREST'

export default {
  data: function() {
    return {
      email: '',
      message: 'Enter an email address',
      foundUsers: []
    }
  },
  computed: {
    users: function() {
      return this.$store.getters.users
    }
  },
  watch: {
    email: function(newEmail, oldEmail) {
      this.message = "Waiting for you to stop typing..."
      this.findUsersByEmail()
    }
  },
  methods: {
    // Implement throttler like lodash _.debounce
    findUsersByEmail: function() {
      if (this.email.length > 0) {
        this.foundUsers = this.users.filter(usr => usr.email.match(this.email))

        if (this.foundUsers.length > 0) {
          this.message = 'There you go!'
        } else {
          this.message = 'Sorry, couldn\'t find any!'
        }
      } else {
        this.foundUsers = []
        this.message = 'Enter an email address'
      }
    },
    addFriend: function(user) {
      friendsREST.addFriend(this, user)
    }
  }
}
</script>

<style scoped>
</style>
