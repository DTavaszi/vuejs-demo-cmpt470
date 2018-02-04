<template>
  <div id="get-user">
    <input class="form-control"
            v-model="newUser.name"
            placeholder="Username">
    <input class="form-control"
            v-model="newUser.admin"
            type="checkbox">
    <button class="btn btn-primary" @click="addUser"> Add User </button>
  </div>
</template>

<script>
import * as type from 'store/mutationTypes/types'

export default {
  computed: {
    newUser: function() {
      return this.$store.getters.newUser
    }
  },
  methods: {
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
</style>
