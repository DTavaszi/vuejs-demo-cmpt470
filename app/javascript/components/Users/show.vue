<template>
  <div class="showUser">
    <updateMessages :user="selectedUser"></updateMessages>
    <v-toolbar flat>
      <v-toolbar-title class="showUser-title">{{ selectedUser.username.length > 0 ? selectedUser.username : selectedUser.email }}</v-toolbar-title>
    </v-toolbar>
    <v-container ref="conversation" grid-list-md text-xs-center class="conversation" @click="focusText()">
      <v-alert type="error" :value="!fetchMessagesStatus">
      Cannot connect to server. Please check your internet connection.
      </v-alert>
      <template v-if="firstLoad == true">
        <div class="progress-spinner">
          <v-progress-circular indeterminate :size="50" color="primary"></v-progress-circular>
        </div>
      </template>
      <template v-else>
        <div>
          You and {{ selectedUser.email }} are now friends.
        </div>
        <template v-for="message in messages">
          <rightSide v-if="currentIsSender(message)" :message="message"></rightSide>
          <leftSide v-else :message="message"></leftSide>
        </template>
      </template>
    </v-container>

    <v-footer>
      <v-text-field autofocus clearable ref="messageInput" type="text" @keyup.enter="sendMessage()" @keyup.esc="resetMessage" placeholder="Type a message" v-model="message"/>
    </v-footer>
  </div>
</template>

<script>
import messagesREST from 'components/Messages/messagesREST'
import updateMessages from 'components/Messages/updateMessages'
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
  props: {
    selectedUser: Object
  },
  computed: {
    messages: function() {
      var app = this
      return this.$store.getters.messages
    },
    friends: function() {
      return this.$store.getters.users
    },
    formattedMessage: function() {
      return { token: this.$store.getters.token, sender_id: this.currentUser.id, recipient_id: this.selectedUser.id, message: this.message }
    },
    fetchMessagesStatus: function () {
      return this.$store.getters.fetchMessagesStatus
    }
  },
  watch: {
    messages: function(newMessages, oldMessages) {
      if (newMessages.length != oldMessages.length) {
        this.scrollBottom() // only scroll to bottom if there are new messages (assumed to be increasing in length)
      }

      if (this.firstLoad && !this.$store.messagesQuerying) {
        this.firstLoad = false
      }
    },
    selectedUser: function(newUser, oldUser) {
      this.firstLoad = true // If selected user changes, then scroll to bottom
      this.focusText()
    }
  },
  methods: {
    resetMessage: function() {
      this.message = ''
    },
    sendMessage: function() {
      var formattedMessage = this.formattedMessage

      if (formattedMessage.message.length > 0) {
        this.$store.dispatch('addMessage', formattedMessage)
        messagesREST.sendMessage(this, formattedMessage)
        this.resetMessage()
      }
    },
    currentIsSender: function(message) {
      return message.sender_id == this.currentUser.id
    },
    focusText: function() {
      if (window.getSelection().toString().length == 0) {
        this.$nextTick(() => this.$refs.messageInput.focus())
      }
    },
    scrollBottom: function() {
      this.$nextTick(() => {
        if (this.firstLoad ||
              this.$refs.conversation.scrollTop >= (this.$refs.conversation.scrollHeight - this.$refs.conversation.clientHeight - 150)) {
          this.$refs.conversation.scrollTop = this.$refs.conversation.scrollHeight
        }
      })
    }
  },
  components: {
    leftSide,
    rightSide,
    updateMessages
  }
}
</script>
