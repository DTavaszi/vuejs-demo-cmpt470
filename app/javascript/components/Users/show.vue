<template>
  <div style="width: 100%;">
    <v-container grid-list-md text-xs-center>
      <template v-for="message in messages">
        <rightSide v-if="currentIsSender(message)" :message="message"></rightSide>
        <leftSide v-else :message="message"></leftSide>
      </template>
    </v-container>

    <input @keyup.enter="sendMessage()" @keyup.esc="resetMessage" type="text" placeholder="Enter a message" v-model="message" />
  </div>
</template>

<script>
import messagesREST from 'components/Messages/messagesREST'
import leftSide from 'components/Messages/leftSide'
import rightSide from 'components/Messages/rightSide'

export default {
  data: function() {
    return {
      currentUser: this.$store.getters.currentUser,
      message: ''
    }
  },
  computed: {
    selectedUser: function() {
      return this.$store.getters.users.find(usr => usr.id == this.$store.getters.selectedItem)
    },
    messages: function() {
      var app = this
      console.log("current: " + this.currentUser.id + "; selected: " + this.selectedUser.id)
      return this.$store.getters.messages.filter(function(message) {
        return ((message.recipient_id == app.currentUser.id) && (message.sender_id == app.selectedUser.id)) ||
            ((message.recipient_id == app.selectedUser.id) && (message.sender_id == app.currentUser.id))
      })
    },
    friends: function() {
      return this.$store.getters.users
    },
    formatted_message: function() {
      return { recipient_id: this.selectedUser.id, message: this.message }
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
      var formatted_message = this.formatted_message

      if (formatted_message.message.length > 0) {
        messagesREST.addMessage(this, formatted_message)
      }
    },
    currentIsSender: function(message) {
      return message.sender_id == this.currentUser.id
    }
  },
  components: {
    leftSide,
    rightSide
  }
}
</script>

<style scoped>
.receiver {
  color: red;
}

.sender {
  color: blue;
}
</style>
