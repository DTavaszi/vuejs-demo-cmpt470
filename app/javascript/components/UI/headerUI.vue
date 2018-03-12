<template>
  <v-toolbar color="blue darken-3" dark app clipped-left fixed>
    <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
      <v-btn :to="redirect_path" icon>
        <v-avatar size="32px" tile>
          <img src="https://vuetifyjs.com/static/doc-images/logo.svg" alt="Vue Messenger">
        </v-avatar>
      </v-btn>
      <span class="hidden-xs-only">Vue Messenger</span>
    </v-toolbar-title>
    <findByEmail/>
    <div class="d-flex align-center" style="margin-left: auto">
      <template v-if="loggedIn">
        <span> Hi {{ user.email }}! </span>
        <v-btn color="info" @click="logout()">Logout</v-btn>
      </template>
    </div>
  </v-toolbar>
</template>

<script>
import authentication from 'components/Login/authentication'
import findByEmail from 'components/Friends/findByEmail'

export default {
  computed: {
    loggedIn: function () {
      return this.$store.getters.isLoggedIn
    },
    user: function () {
      return this.$store.getters.currentUser
    },
    redirect_path: function () {
      return this.loggedIn ? "/conversations" : "/"
    }
  },
  methods: {
    logout: function() {
      authentication.logout(this)
    }
  },
  components: {
    findByEmail
  }
}
</script>
