<template>
  <div>
    <header style="background-color: blue; width: 100%; height: 100px;">
      This is my header
    </header>
    <p style="background-green;">{{ count }}</p>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
    <router-link to="/hello">Go back</router-link>
    <div id="get-user">
      <input class="form-control"
              v-model="newUser.name"
              placeholder="Username">
      <input class="form-control"
              v-model="newUser.admin"
              type="checkbox">
      <button class="btn btn-primary" @click="addUser"> Add User </button>
    </div>
    <div id="current-users" v-if="users.length > 0">
      <h3> Current ({{ users.length }}) </h3>
      <ul class="list-group">
        <li class="list-group-item" v-for="user in users">
          {{ user }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import * as type from '../store/mutationTypes/types'

export default {
  computed: {
    count: function() {
      return this.$store.state.count
    },
    newUser: function() {
      return this.$store.getters.newUser
    },
    name: function() {
      return this.$store.getters.newUser.name
    },
    admin: function() {
      return this.$store.getters.newUser.admin
    },
    users: function() {
      return this.$store.getters.users
    }
  },
  methods: {
    increment: function() {
      this.$store.commit(type.Increment)
    },
    decrement: function() {
      this.$store.commit(type.Decrement)
    },
    getUser: function(e) {
      this.$store.dispatch('getUser', e.target.value)
    },
    addUser: function() {
      this.$store.dispatch('addUser')
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
