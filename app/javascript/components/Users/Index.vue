<template>
  <div id="current-users" v-if="users.length > 0">
    <h3> Current ({{ users.length }}) </h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="user in users">
        {{ user }}
        <button @click="removeUser(user)">&times;</button>
      </li>
    </ul>
  </div>
</template>

<script>
import userRequests from './userRequests'
const GET_USERS_PATH = '/users/admin'

import HTTPService from 'HTTPService'

export default {
  computed: {
    users: function() {
      return this.$store.getters.users
    }
  },
  methods: {
    removeUser: function(user) {
      userRequests.removeUser(this, user)
    }
  },
  created: function() {
    var app = this
    console.log("querying users...")
    HTTPService.get(GET_USERS_PATH)
    .then(function(res) {
      app.$store.dispatch('setUsers', res.data)
    })
    .catch(function(error) {
      console.log(error)
    })
  }
}
</script>

<style scoped>
</style>
