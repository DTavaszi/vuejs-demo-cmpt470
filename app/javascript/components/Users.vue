<template>
  <div>
    <AddUser></AddUser>
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
import AddUser from './Users/AddUser'

export default {
  components: {
    AddUser
  },
  computed: {
    users: function() {
      return this.$store.getters.users
    }
  },
  methods: {
    getUser: function(e) {
      this.$store.dispatch('getUser', e.target.value)
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
