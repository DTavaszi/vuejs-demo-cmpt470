<template>
  <div id="get-user">
    <input class="form-control" v-model="newUser.email" placeholder="Email">
    <input class="form-control" v-model="newUser.username" placeholder="Username">
    <input class="form-control" v-model="newUser.password" placeholder="Password (min. 6)">
    <label>
      <input class="form-control" v-model="newUser.admin" type="checkbox">
      Admin
    </label>
    <button class="btn btn-primary" @click="addUser"> Add User </button>
  </div>
</template>

<script>
import userRequests from './userRequests'

export default {
  data: function() {
    return {
      newUser: {
        email: '',
        password: '',
        username: '',
        admin: false
      }
    }
  },
  methods: {
    addUser: function() {
      userRequests.addUser(this, this.newUser)
    }
  }
}
</script>

<style scoped>
</style>
