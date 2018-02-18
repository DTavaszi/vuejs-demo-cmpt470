<!-- <template>
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
</template> -->

<template>
<div id="get-user" style="top: 10%;">
  <v-app ml-3>
        <v-layout row wrap>
          <v-flex xs8 sm2 ml-3>
            <v-text-field
              v-model="newUser.email"
              label="Email"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs8 sm2 ml-3>
            <v-text-field
              v-model="newUser.username"
              label="Username"
            ></v-text-field>
          </v-flex>
          <v-flex xs8 sm2 ml-3>
            <v-text-field
              v-model="newUser.password"
              label="Password"
              required
            ></v-text-field>
          </v-flex>
          <v-flex ml-5 mt-4>
            <v-checkbox
            label="ADMIN"
            v-model="newUser.admin"
            type="checkbox"
          ></v-checkbox>
          </v-flex>    
          <v-flex mt-3 mr-5>
            <v-btn color="blue darken-1" @click="addUser">Add User</v-btn>
          </v-flex>
      </v-layout>
  </v-app>
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