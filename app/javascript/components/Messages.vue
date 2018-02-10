<template>
  <div>
    <ul>
      <li v-for="message in messages">
        {{ message }}
      </li>
    </ul>

    <select v-model="selected">
      <option v-for="friend in friends" :value="friend.id">
        {{ friend.email }}
      </option>
    </select>

    <input @keyup.enter="sendMessage()" @keyup.esc="resetMessage" type="text" placeholder="Enter a message" v-model="message" />
  </div>
</template>

<script>
import messagesREST from './Messages/messagesREST'
export default {
  data: function() {
    return {
      selected: 0,
      message: ''
    }
  },
  computed: {
    messages: function() {
      return this.$store.getters.messages
    },
    friends: function() {
      return this.$store.getters.users
    },
    formatted_message: function() {
      return { recipient_id: this.selected, message: this.message }
    }
  },
  created: function() {
    messagesREST.getMessages(this)
  },
  methods: {
    resetMessage: function() {
      this.message = ''
    },
    sendMessage: function() {
      //messagesREST.addMessage()
      console.log("Sending message: " + this.formatted_message)
    }
  }
}
</script>
