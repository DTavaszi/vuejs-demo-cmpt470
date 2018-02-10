<template>
  <div>
    <mainUI :items="items">
      <template slot="title"> AppTitle </template>
    </mainUI>
  </div>
</template>

<script>
import mainUI from 'components/UI/mainUI'
import userRequests from 'components/Users/userRequests'

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
      return this.users.map(function(user) {
        return {
          icon: 'person_pin',
          text: user.email
        }
      })
    }
  },
  created: function() {
    userRequests.getUsers(this)
  },
  components: {
    mainUI
  }
}
</script>

<style scoped>
</style>
