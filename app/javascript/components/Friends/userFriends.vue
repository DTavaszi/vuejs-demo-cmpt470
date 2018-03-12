<template>
  <div id="friends" v-if="friends.length > 0">
    <h3> Current Friends ({{ friends.length }}) </h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="friend in friends">
        {{ friend }}
        <button @click="removeFriend(friend)">&times; Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import friendsREST from './friendsREST'

export default {
  props: ['friends'],
  methods: {
    removeFriend: function(friend) {
      friendsREST.removeFriend(this, friend)
    }
  }
}
</script>

<style scoped>
</style>
