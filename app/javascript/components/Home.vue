<template>
  <div>
    <getMessageNotifications></getMessageNotifications>
    <!-- <getUsers></getUsers> -->
    <getFriends></getFriends>

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
import getUsers from 'components/Users/getUsers'
import getFriends from 'components/Friends/getFriends'

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
    friendships: function() {
      return this.$store.getters.friendships
    },
    current_friends: function() {
      return this.users.filter(usr => this.$store.getters.current_friends.find(friend => friend.sender_id == usr.id))
    },
    items: function () {
      var app = this
      return this.current_friends.map(function(user) {
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

      var friends = friends_pending.filter(function(pending) {
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
      friend_requests = (!!friend_requests ? friend_requests : [])
      friends_pending = (!!friends_pending ? friends_pending : [])
      friends = (!!friends ? friends : [])

      this.$store.dispatch('setCurrentFriends', friends)
      this.$store.dispatch('setFriendsPending', friends_pending)
      this.$store.dispatch('setFriendRequests', friend_requests)
    }
  },
  created: function () {
    userRequests.getUsers(this)
  },
  components: {
    mainUI,
    conversationsUI,
    showUser,
    getMessageNotifications,
    getUsers,
    getFriends
  }
}
</script>

<style scoped>
</style>
