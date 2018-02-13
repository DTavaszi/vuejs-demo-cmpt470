<template>
  <v-layout row class="height-auto message-card">
    <v-flex xs1>
      <v-list-tile-avatar size="38px">
        <img v-bind:src="avatar"/>
      </v-list-tile-avatar>
    </v-flex>
    <v-flex xs10>
      <v-card class="leftSide">
        <v-card-text class="pa-2"> {{ message.message }} </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs1>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: {
      message: Object
    },
    computed: {
      user: function() {
        return this.$store.getters.users.find(usr => usr.id == this.message.sender_id)
      },
      avatar: function() {
        return 'https://www.gravatar.com/avatar/' + this.user.email
      }
    }
  }
</script>
