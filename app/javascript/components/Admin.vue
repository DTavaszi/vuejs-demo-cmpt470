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
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
    <v-avatar size="125px">
    <img class="img-circle elevation-7 mb-1" src="#"/>
    </v-avatar>
    <div class="heading text-m-right pt-1 pb-3">
    <span style="float:right; margin-right:25%">ADMIN</span>
    </div>
    <br/>
    <v-divider></v-divider>
      <v-list dense>
        <v-list-tile @click="show = !show">
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile if @click="">
          <v-list-tile-action>
            <v-icon>email</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Message</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout v-if="show"
          justify-center
          align-center
        >
            <Users></Users>

        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
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
