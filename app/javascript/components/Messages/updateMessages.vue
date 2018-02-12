<template>
</template>

<script>
import messagesREST from './messagesREST'

export default {
  created: function () {
    this.update()
  },
  computed: {
    querying: function () {
      return this.$store.getters.querying
    }
  },
  methods: {
    update: function () {
      var app = this
      setInterval(function() {
        if (!app.querying) {
          messagesREST.getMessages(app)
          app.$store.dispatch('setQuerying', true)
        }
      }, 1000)
    }
  }
}
</script>
