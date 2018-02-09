<template>
  <div>
    <ul>
      <li v-for="message in messages">
        {{ message }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  computed: {
    messages: function() {
      return this.$store.getters.messages
    }
  },
  created: function() {
    messagesREST.getMessages(this)
  }
}
</script>
