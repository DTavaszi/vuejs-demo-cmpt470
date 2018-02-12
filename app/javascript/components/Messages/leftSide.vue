<template>
  <v-layout row wrap>
    <v-flex xs1>
      <v-list-tile-avatar>
        <img v-bind:src="avatar"/>
      </v-list-tile-avatar>
    </v-flex>
    <v-flex xs10>
      <v-card dark color="secondary" class="leftSide">
        <v-card-text class="px-0"> {{ message.message }} </v-card-text>
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
