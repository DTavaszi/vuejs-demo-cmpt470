<template>
</template>

<script>
import messagesREST from './messagesREST'

const QUERY_INTERVAL = 1000

export default {
  props: {
    user: Object,
  },
  created: function () {
    this.update()
  },
  computed: {
    querying: function () {
      return this.$store.getters.messagesQuerying
    },
    lastMessage: function() {
      return this.$store.getters.messages.slice().reverse().find(msg => !!msg.id)
    }
  },
  methods: {
    update: function () {
      var app = this
      setInterval(function() {
        if (!app.querying) {
          if (!!app.lastMessage) {
            messagesREST.getMessagesAfter(app, app.user, app.lastMessage)
          } else {
            messagesREST.getMessages(app, app.user)
          }
          app.$store.dispatch('setMessagesQuerying', true)
        }
      }, QUERY_INTERVAL)
    }
  }
}
</script>
