<template>
  <div>
    <getMessageNotifications></getMessageNotifications>
    <mainUI :items="items">
      <template slot="title"> AppTitle </template>
      <showUser v-if="isUserSelection"></showUser>
    </mainUI>
  </div>
</template>

<script>
import mainUI from 'components/UI/mainUI'
import userRequests from 'components/Users/userRequests'
import showUser from 'components/Users/show'
import getMessageNotifications from 'components/MessageNotifications/getNotifications'


const USER_TYPE = 'user'

export default {
  computed: {
    users: function () {
      return this.$store.getters.users
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
          console.log('!!messageNotification')
          if (messageNotification.sender_id != app.$store.getters.selectedItem) {
            notify = messageNotification.notify
          }
          if (!!messageNotification.message) {
            console.log('!!messageNotification.message')
            message = messageNotification.message.message
            console.log(messageNotification.message.message)
          }
        }

        return {
          id: user.id,
          type: USER_TYPE,
          icon: 'person_pin',
          title: user.email,
          subtitle: message,
          notify: notify,
          active: (app.$store.getters.selectedType == USER_TYPE && app.$store.getters.selectedItem == user.id),
          avatar: 'https://www.gravatar.com/avatar/' + user.email
        }
      })
    },
    isUserSelection: function () {
      return this.$store.getters.selectedType == USER_TYPE
    }
  },
  created: function () {
    userRequests.getUsers(this)
  },
  components: {
    mainUI,
    showUser,
    getMessageNotifications
  }
}
</script>

<style scoped>
</style>
