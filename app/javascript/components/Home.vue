<template>
  <div>
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

const USER_TYPE = 'user'

export default {
  data: () => ({
    old_items: [
      { icon: 'contacts', text: 'Contacts' },
      { icon: 'history', text: 'Frequently contacted' },
      { icon: 'content_copy', text: 'Duplicates' },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Labels',
        model: true,
        children: [
          { icon: 'add', text: 'Create label' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'More',
        model: false,
        children: [
          { text: 'Import' },
          { text: 'Export' },
          { text: 'Print' },
          { text: 'Undo changes' },
          { text: 'Other contacts' }
        ]
      },
      { icon: 'settings', text: 'Settings' },
      { icon: 'chat_bubble', text: 'Send feedback' },
      { icon: 'help', text: 'Help' },
      { icon: 'phonelink', text: 'App downloads' },
      { icon: 'keyboard', text: 'Go to the old version' }
    ]
  }),
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
    showUser
  }
}
</script>

<style scoped>
</style>
