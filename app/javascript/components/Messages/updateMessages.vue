<template>
</template>

<script>
import messagesREST from './messagesREST'

const QUERY_INTERVAL = 500

export default {
  data: function (){
    return {
      switched: true
    }
  },
  created: function () {
    this.update()
  },
  computed: {
    user: function () {
      return this.$store.getters.users.find(usr => usr.id == this.$store.getters.selectedItem)
    },
    querying: function () {
      return this.$store.getters.messagesQuerying
    },
    lastMessage: function () {
      return this.$store.getters.messages.slice().reverse().find(msg => !!msg.id)
    }
  },
  watch: {
    user: function(newUser, oldUser) {
        if (!(!!newUser && !!oldUser) || newUser.id != oldUser.id) {
          this.switched = true
          this.$store.dispatch('setMessages', [])
        }
    }
  },
  methods: {
    update: function () {
      var app = this
      setInterval(function() {
        if (!app.querying && !!app.user) {
          if (app.$store.getters.selectedType == 'user') {
            if (!!app.lastMessage && !app.switched) {
              app.switched = false
              messagesREST.getMessagesAfter(app, app.user, app.lastMessage)
            } else {
              messagesREST.getMessages(app, app.user)
            }
            app.$store.dispatch('setMessagesQuerying', true)
          } else {
            app.$store.dispatch('setMessages', [])
          }
        }
      }, QUERY_INTERVAL)
    }
  }
}
</script>
