<template>
  <div>
    <updateMessages></updateMessages>
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
import updateMessages from 'components/Messages/updateMessages'
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
        return {
          id: user.id,
          type: USER_TYPE,
          icon: 'person_pin',
          title: user.email,
          active: (app.$store.getters.selectedType == USER_TYPE && app.$store.getters.selectedItem == user.id),
          notify: !!app.messageNotifications.find(mn => mn.notify && (mn.recipient_id == app.$store.getters.currentUser.id)
                      && (mn.sender_id == user.id)),
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
    updateMessages,
    getMessageNotifications
  }
}
</script>

<style scoped>
</style>
