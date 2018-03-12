<template>
  <div>
    <getMessageNotifications></getMessageNotifications>
    <mainUI>
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
import friendsREST from './Friends/friendsREST'

const USER_TYPE = 'user'

export default {
  data: () => {
    return {
      selectedItem: -1,
      friend_requests: [],
      friends_pending: [],
      friends: []
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
    friendships: function() {
      return this.$store.getters.friendships
    },
    items: function () {
      var app = this
      return this.friends.map(function(user) {
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
  watch: {
    friendships: function(newFriends, oldFriends) {
      this.updateFriendships()
    }
  },
  methods: {
    // Calculates friendship relationships. Both parties must friend each other to become friends.
    updateFriendships: function() {
      const user_id = this.$store.getters.currentUser.id

      var friend_requests = this.friendships.filter(f => f.sender_id == user_id)
      var friends_pending = this.friendships.filter(f => f.recipient_id == user_id)

      const friends = friends_pending.filter(function(pending) {
        return !!friend_requests.find(request => request.recipient_id == pending.sender_id)
      })

      if (friends.length > 0) {
        friend_requests = friend_requests.filter(function(request) {
          return !(!!friends.find(friend => friend.sender_id == request.recipient_id))
        })

        friends_pending = friends_pending.filter(function(pending) {
          return !(!!friends.find(friend => friend.sender_id == pending.sender_id))
        })
      }

      // Set to empty array, otherwise it will be undefined
      this.friend_requests = (!!friend_requests ? friend_requests : [])
      this.friends_pending = (!!friends_pending ? friends_pending : [])
      this.friends = (!!friends ? friends : [])
    }
  },
  created: function () {
    userRequests.getUsers(this)
    friendsREST.getFriends(this)
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
