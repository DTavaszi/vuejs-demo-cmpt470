<template>
</template>

<script>
import friendsREST from './friendsREST'

const QUERY_INTERVAL = 1000

export default {
  created: function () {
    this.update()
  },
  computed: {
    querying: function() {
      return this.$store.getters.friendsQuerying
    }
  },
  methods: {
    update: function() {
      var app = this
      setInterval(function() {
        if (!app.querying) {
          friendsREST.getFriends(app)
          app.$store.dispatch('setFriendsQuerying', true)
        }
      }, QUERY_INTERVAL)
    }
  }
}
</script>
