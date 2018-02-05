<template>
  <div id="current-users" v-if="users.length > 0">
    <h3> Current ({{ users.length }}) </h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="user in users">
        {{ user }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { API_ENDPOINT, getHeader } from 'app.config'

export default {
  computed: {
    users: function() {
      return this.$store.getters.users
    }
  },
  methods: {
    getUser: function(e) {
      this.$store.dispatch('getUser', e.target.value)
    }
  },
  created: function() {
    console.log("querying users...")
    axios.get(API_ENDPOINT + '/users/admin', null, {
      headers: {
        'Content-Type': 'application/json' // Force json response
      }
    })
    .then(function(res) {
      console.log("done.")
      this.users = response.data
    })
    .catch(function(err) {
      console.log("error!")
      this.errors.push(err)
    })
  }
}
</script>

<style scoped>
</style>
