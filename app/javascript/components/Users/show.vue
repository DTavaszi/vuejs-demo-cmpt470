<template>
  <div class="showUser">
    <updateMessages :user="selectedUser"></updateMessages>
    <v-toolbar flat>
      <v-toolbar-title class="showUser-title">{{ selectedUser.email }}</v-toolbar-title>
    </v-toolbar>
    <v-container ref="conversation" grid-list-md text-xs-center class="conversation" @scroll.passive="onScroll()" @click="focusText()">
      <v-alert type="error" :value="!fetchMessagesStatus">
      Cannot connect to server. Please check your internet connection.
      </v-alert>
      <template v-if="firstLoad == true">
        <div class="progress-spinner">
          <v-progress-circular indeterminate :size="50" color="primary"></v-progress-circular>
        </div>
      </template>
      <template v-else>
        <div v-if="!hasPreviousMessages || messages.length == 0">
          <template v-if="isFriend()">
            You and {{ username }} are friends. <v-btn color="red" small @click="removeFriend()"> Remove </v-btn>
          </template>
          <template v-else>
            You and {{ username }} are no longer friends.
          </template>
        </div>
        <template v-if="isFriend()" v-for="message in messages">
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
import friendsREST from 'components/Friends/friendsREST'
import updateMessages from 'components/Messages/updateMessages'
import leftSide from 'components/Messages/leftSide'
import rightSide from 'components/Messages/rightSide'

export default {
  data: function() {
    return {
      currentUser: this.$store.getters.currentUser,
      message: '',
      firstLoad: true,
      previousScrollPosition: 0
    }
  },
  props: {
    selectedUser: Object
  },
  computed: {
    username: function () {
      return this.selectedUser.email
    },
    messages: function () {
      return this.$store.getters.messages
    },
    friends: function () {
      return this.$store.getters.users
    },
    formattedMessage: function () {
      return { token: this.$store.getters.token, sender_id: this.currentUser.id, recipient_id: this.selectedUser.id, message: this.message }
    },
    fetchMessagesStatus: function () {
      return this.$store.getters.fetchMessagesStatus
    },
    lastMessage: function () {
      return this.$store.getters.messages.slice().reverse()[0]
    },
    firstMessage: function () {
      return this.$store.getters.messages[0]
    },
    hasPreviousMessages: function () {
      return this.$store.getters.hasPreviousMessages
    },
    messagesQuerying: function () {
      return this.$store.getters.messagesQuerying
    }
  },
  watch: {
    lastMessage: function (newMessage, oldMessage) {
      console.log(newMessage != oldMessage)
      if (newMessage != oldMessage) {
        this.scrollBottom() // scroll to bottom if there are new messages (assumed to be increasing in length)
      }
    },
    selectedUser: function (newUser, oldUser) {
      this.firstLoad = true // If selected user changes, then scroll to bottom
      this.focusText()
    },
    messagesQuerying: function (newValue, oldValue) {
      if (newValue == false) {
        this.firstLoad = false
      }
    }
  },
  methods: {
    resetMessage: function () {
      this.message = ''
    },
    sendMessage: function () {
      var formattedMessage = this.formattedMessage

      if (formattedMessage.message.length > 0) {
        this.$store.dispatch('addMessage', formattedMessage)
        messagesREST.sendMessage(this, formattedMessage)
        this.resetMessage()
      }
    },
    currentIsSender: function (message) {
      return message.sender_id == this.currentUser.id
    },
    focusText: function () {
      if (window.getSelection().toString().length == 0) {
        this.$nextTick(() => this.$refs.messageInput.focus())
      }
    },
    onScroll: function () {
      var scrollPosition = this.$refs.conversation.scrollTop

      if (scrollPosition < this.previousScrollPosition && scrollPosition == 0) {
        this.loadPreviousMessages()
      }

      this.previousScrollPosition = scrollPosition
    },
    scrollBottom: function () {
      console.log('scrolling bottom')

      if (this.firstLoad ||
            this.$refs.conversation.scrollTop >=
            (this.$refs.conversation.scrollHeight -
              this.$refs.conversation.clientHeight - 150))
      {
        this.firstLoad = false
        setTimeout(() => {
          this.$refs.conversation.scrollTop = this.$refs.conversation.scrollHeight
        }, 0)
      }
    },
    loadPreviousMessages: function () {
      if (this.hasPreviousMessages) {
        messagesREST.getMessagesBefore(this, this.selectedUser, this.firstMessage)
      }
    },
    isFriend: function() {
      return this.$store.getters.current_friends.find(friend => friend.sender_id == this.selectedUser.id)
    },
    removeFriend: function () {
      var friend = this.isFriend()
      friendsREST.removeFriend(this, friend)
    }
  },
  components: {
    leftSide,
    rightSide,
    updateMessages
  }
}
</script>
