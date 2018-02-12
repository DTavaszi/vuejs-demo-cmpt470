<template>
  <div>
    <updateMessages></updateMessages>
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

const USER_TYPE = 'user'

export default {
  computed: {
    users: function() {
      return this.$store.getters.users
    },
    items: function() {
      var app = this
      return this.users.map(function(user) {
        return {
          id: user.id,
          type: USER_TYPE,
          icon: 'person_pin',
          title: user.email,
          active: (app.$store.getters.selectedType == USER_TYPE && app.$store.getters.selectedItem == user.id),
          read: !(!!app.$store.getters.messages.find(msg => (msg.sender_id == user.sender_id) && !msg.read)),
          avatar: 'https://www.gravatar.com/avatar/' + user.email
        }
      })
    },
    isUserSelection: function() {
      return this.$store.getters.selectedType == USER_TYPE
    }
  },
  created: function() {
    userRequests.getUsers(this)
  },
  components: {
    mainUI,
    showUser,
    updateMessages
  }
}
</script>

<style scoped>
</style>
