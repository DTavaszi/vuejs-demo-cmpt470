<template>
  <div>
    <v-navigation-drawer fixed clipped app>
      <h1 style="top:10%;">ADMIN</h1>
      <v-divider></v-divider>
        <v-list>
          <v-list-tile @click="show = !show">
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Users</v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>email</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Messages</v-list-tile-content>
        </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container fluid fill-height class="no-padding">
        <v-layout justify-center align-center>
          <Users></Users>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>


<script>
import Hello from './Hello'
import Users from './Users'
import Friends from './Friends'
import Messages from './Messages'

export default {
  data: function() {
    return {
      show: false
    }
  },
  components: {
    Hello,
    Users,
    Friends,
    Messages
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
