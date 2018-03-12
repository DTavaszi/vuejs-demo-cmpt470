<template>
</template>

<script>
import userRequests from './userRequests'

const QUERY_INTERVAL = 1000

export default {
  created: function () {
    this.update()
  },
  computed: {
    querying: function() {
      return this.$store.getters.usersQuerying
    }
  },
  methods: {
    update: function() {
      var app = this
      setInterval(function() {
        if (!app.querying) {
          userRequests.getUsers(app)
          app.$store.dispatch('setUsersQuerying', true)
        }
      }, QUERY_INTERVAL)
    }
  }

}
</script>
