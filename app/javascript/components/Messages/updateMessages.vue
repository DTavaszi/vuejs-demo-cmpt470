<template>
</template>

<script>
import messagesREST from './messagesREST'

const QUERY_INTERVAL = 1000

export default {
  created: function () {
    this.update()
  },
  computed: {
    querying: function () {
      return this.$store.getters.messagesQuerying
    }
  },
  methods: {
    update: function () {
      var app = this
      setInterval(function() {
        if (!app.querying) {
          messagesREST.getMessages(app)
          app.$store.dispatch('setMessagesQuerying', true)
        }
      }, QUERY_INTERVAL)
    }
  }
}
</script>
