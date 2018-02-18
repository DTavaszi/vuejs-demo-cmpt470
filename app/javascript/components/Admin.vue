<!-- <template>
  <div>
    <header style="background-color: #f3f3f3; width: 100%; height: 100px;">
      <Hello></Hello>
    </header>
    <Users></Users>
    <Friends></Friends>
    <Messages></Messages>
  </div>
</template> -->

<template>
  <v-app>
    <v-navigation-drawer fixed clipped app v-model="drawer">
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

    <v-toolbar color="blue darken-3" dark app clipped-left fixed>
      <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-xs-only">ChatApp</span>
      </v-toolbar-title>
      <v-text-field light solo prepend-icon="search" placeholder="Search" style="max-width: 500px; min-width: 128px"></v-text-field>
      <div class="d-flex align-center" style="margin-left: auto">
        <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>
        <v-btn icon large>
          <v-avatar size="32px" tile>
            <img
              src="https://vuetifyjs.com/static/doc-images/logo.svg"
              alt="Vuetify">
          </v-avatar>
        </v-btn>
      </div>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height class="no-padding">
        <v-layout justify-center align-center>
          <Users></Users>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>


<script>
import Hello from './Hello'
import Users from './Users'
import Friends from './Friends'
import Messages from './Messages'

export default {
  data: function() {
    return {
      show: false,
      dialog: false,
      drawer: null
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