<template>
  <div id="friend_requests" v-if="friend_requests.length > 0">
    <h3> Friend requests ({{ friend_requests.length }}) </h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="friend in friend_requests">
        {{ friend }}
        <button @click="removeFriend(friend)">&times; Cancel</button>
      </li>
    </ul>
  </div>
</template>

<script>
import friendsREST from './friendsREST'

export default {
  props: ["friend_requests"],
  methods: {
    removeFriend: function(friend) {
      friendsREST.removeFriend(this, friend)
    }
  }
}
</script>

<style scoped>
</style>
