<template>
  <div>
    <getMessageNotifications></getMessageNotifications>
    <mainUI>
      <template slot="title">Demo Chat App</template>
      <template slot="drawer">
        <conversationsUI title="Friends" :items="items" :selectedItem.sync="selectedItem"></conversationsUI>
      </template>

      <showUser v-if="!!selectedUser" :selectedUser="selectedUser"></showUser>
    </mainUI>
  </div>
</template>

<script>
import mainUI from 'components/UI/mainUI'
import conversationsUI from 'components/UI/conversationsUI'
import userRequests from 'components/Users/userRequests'
import showUser from 'components/Users/show'
import getMessageNotifications from 'components/MessageNotifications/getNotifications'

const USER_TYPE = 'user'

export default {
  data: () => {
    return {
      selectedItem: -1
    }
  },
  computed: {
    users: function () {
      return this.$store.getters.users
    },
    selectedUser: function () {
      return this.users.find(usr => usr.id == this.selectedItem)
    },
    messageNotifications: function () {
      return this.$store.getters.messageNotifications
    },
    items: function () {
      var app = this
      return this.users.map(function(user) {
        var messageNotification = app.messageNotifications.find(mn => mn.recipient_id == app.$store.getters.currentUser.id
                    && mn.sender_id == user.id)
        var message = ' '
        var notify = false

        if (!!messageNotification) {
          if (messageNotification.sender_id != app.selectedItem) {
            notify = messageNotification.notify
          }
          if (!!messageNotification.message) {
            message = messageNotification.message.message
          }
        }

        return {
          id: user.id,
          type: USER_TYPE,
          icon: 'person_pin',
          title: user.email,
          subtitle: message,
          notify: notify,
          active: app.selectedItem == user.id,
          avatar: 'https://www.gravatar.com/avatar/' + user.email
        }
      })
    }
  },
  created: function () {
    userRequests.getUsers(this)
  },
  components: {
    mainUI,
    conversationsUI,
    showUser,
    getMessageNotifications
  }
}
</script>

<style scoped>
</style>
