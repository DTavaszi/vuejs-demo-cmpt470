<template>
  <div class="showUser" @click="focusText()">
    <v-toolbar flat>
      <v-toolbar-title class="showUser-title">{{ selectedUser.username.length > 0 ? selectedUser.username : selectedUser.email }}</v-toolbar-title>
    </v-toolbar>
    <v-container ref="conversation" grid-list-md text-xs-center class="conversation">
      <template v-for="message in messages">
        <rightSide v-if="currentIsSender(message)" :message="message"></rightSide>
        <leftSide v-else :message="message"></leftSide>
      </template>
    </v-container>

    <v-footer>
      <v-text-field autofocus clearable ref="messageInput" type="text" @keyup.enter="sendMessage()" @keyup.esc="resetMessage" placeholder="Type a message" v-model="message"/>
    </v-footer>
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
      this.scrollBottom()

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
    this.updateMessagesRead()
  },
  methods: {
    resetMessage: function() {
      this.message = ''
    },
    sendMessage: function() {
      var formatted_message = this.formatted_message

      if (formatted_message.message.length > 0) {
        messagesREST.addMessage(this, formatted_message)
        this.resetMessage()
      }
    },
    currentIsSender: function(message) {
      return message.sender_id == this.currentUser.id
    },
    focusText: function() {
      this.$nextTick(() => this.$refs.messageInput.focus())
    },
    scrollBottom: function() {
      this.$nextTick(() => this.$refs.conversation.scrollTop = this.$refs.conversation.scrollHeight)
    },
    updateMessagesRead() {
      messagesREST.updateMessagesRead(this, this.selectedUser)
    }
  },
  components: {
    leftSide,
    rightSide
  }
}
</script>
