<template>
  <v-app id="inspire">
    <v-toolbar color="blue darken-3" dark app clipped-left fixed>
      <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-xs-only"><slot name="title">ChatApp</slot></span>
      </v-toolbar-title>
      <v-text-field light solo prepend-icon="search" placeholder="Search" style="max-width: 500px; min-width: 128px"></v-text-field>
      <div class="d-flex align-center" style="margin-left: auto">
        <v-btn icon>
          <v-icon>apps</v-icon>
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
        <v-layout row>

        <template v-if="loggedIn">
          <h1>cannot register</h1>
          <button @click="logout()"> Logout </button>
        </template>
        <template v-if="!loggedIn">
            <v-flex xs12 sm6 offset-sm3 mt-5>
              <v-card color="grey lighten-4">
                <v-card-text>
                  <v-container>
                    <form v-on:submit.prevent="register()">
                      <v-layout row>
                        <v-flex xs12>
                          <v-text-field
                            label="Email"
                            v-model="newUser.email"
                            type="email"
                            prepend-icon="email"
                            required></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row>
                        <v-flex xs12>
                          <v-text-field
                            label="Password"
                            v-model="newUser.password"
                            type="password"
                            prepend-icon="lock"
                            required></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row>
                        <v-flex xs12>
                          <v-text-field
                            label="Confirm Password"
                            v-model="newUser.password_confirmation"
                            type="password"
                            prepend-icon="lock"
                            required></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row>
                        <v-flex xs12>
                          <v-btn color="blue darken-1" type="submit" value="register">Register</v-btn>
                          <scan>Already have an account?</scan>
                          <router-link to="/login">Login</router-link>
                        </v-flex>
                      </v-layout>
                    </form>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-flex>
          </template>

        </v-layout>
      </v-container>
    </v-content>
  </v-app>
<!--  <div v-if="loggedIn">
      <h1>cannot register</h1>
      <button @click="logout()"> Logout </button>
    </div>
    <div v-else>
      <h1>Temp Registration Page</h1>
      <v-container>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-card color="grey lighten-4">
              <v-card-text>
                <v-container>
                  <form v-on:submit.prevent="register()">
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                          label="Email"
                          v-model="newUser.email"
                          type="email"
                          prepend-icon="email"
                          required></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                          label="Password"
                          v-model="newUser.password"
                          type="password"
                          prepend-icon="lock"
                          required></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                          label="Confirm Password"
                          v-model="newUser.password_confirmation"
                          type="password"
                          required></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-btn color="blue darken-1" type="submit" value="register">Register</v-btn>
                        <scan>Already have an account?</scan>
                        <router-link to="/login">Login</router-link>
                      </v-flex>
                    </v-layout>
                  </form>
                </v-container>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <router-link to="/">Go back</router-link>
    </div> -->
</template>


<script>
import authentication from './Login/authentication'
export default {
  data: function() {
    return {
      newUser: {
        email: '',
        username: '',
        password: '',
        password_confirmation: '',
      }
    }
  },
  computed: {
    loggedIn: function() {
      return this.$store.getters.isLoggedIn
    },
    logout: function() {
      authentication.logout(this)
    }
  },
  methods: {
    register: function() {
      authentication.register(this, this.newUser)
    }
  }
}
</script>

<style scoped>
</style>
