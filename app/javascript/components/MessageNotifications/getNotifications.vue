<template>
</template>

<script>
import messageNotificationsREST from './notificationsREST'

const QUERY_INTERVAL = 1000

export default {
  created: function () {
    this.update()
  },
  computed: {
    querying: function() {
      return this.$store.getters.messageNotificationsQuerying
    }
  },
  methods: {
    update: function() {
      var app = this
      setInterval(function() {
        if (!app.querying) {
          messageNotificationsREST.getMessageNotifications(app)
          app.$store.dispatch('setMessageNotificationsQuerying', true)
        }
      }, QUERY_INTERVAL)
    }
  }

}
</script>
