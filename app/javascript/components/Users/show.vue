<template>
  <div class="showUser">
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
      message: '',
      firstLoad: true // The first time the window loads, scroll to bottom
    }
  },
  computed: {
    selectedUser: function() {
      return this.$store.getters.users.find(usr => usr.id == this.$store.getters.selectedItem)
    },
    messages: function() {
      var app = this
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
  watch: {
    messages: function(newMessages, oldMessages) {
      if (newMessages.length != oldMessages.length) {
        this.scrollBottom() // only scroll to bottom if there are new messages (assumed to be increasing in length)
      }
    },
    selectedUser: function(newUser, oldUser) {
      this.firstLoad = true // If selected user changes, then scroll to bottom
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
      this.$nextTick(() => {
        if (this.firstLoad ||
            this.$refs.conversation.scrollTop >= (this.$refs.conversation.scrollHeight - this.$refs.conversation.clientHeight - 150)) {
          this.firstLoad = false
          this.$refs.conversation.scrollTop = this.$refs.conversation.scrollHeight
        }
      })
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
