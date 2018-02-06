<template>
  <div id="get-user">
    <input class="form-control" v-model="newUser.username" placeholder="Username">
    <label>
      <input class="form-control" v-model="newUser.admin" type="checkbox">
      Admin
    </label>
    <button class="btn btn-primary" @click="addUser"> Add User </button>
  </div>
</template>

<script>
import * as type from 'store/mutationTypes/types'

export default {
  data: function() {
    return {
      newUser: {
        email: '',
        username: '',
        admin: false
      }
    }
  },
  methods: {
    addUser: function() {
      this.$store.dispatch('addUser', this.newUser)
    }
  }
}
</script>

<style scoped>
</style>
