<template>
  <div id="friends_pending" v-if="friends_pending.length > 0">
    <h3> Friends pending ({{ friends_pending.length }}) </h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="friend in friends_pending">
        {{ friend }}
        <button @click="acceptFriend(friend)">✔ Accept</button>
      </li>
    </ul>
  </div>
</template>

<script>
import friendsREST from './friendsREST'

export default {
  props: ['friends_pending'],
  methods: {
    acceptFriend: function(friend) {
      friendsREST.addFriend(this, this.getUserByID(friend.sender_id))
    },
    getUserByID: function(id) {
      return this.$store.getters.users.find(usr => usr.id == id)
    }
  }
}
</script>

<style scoped>
</style>
