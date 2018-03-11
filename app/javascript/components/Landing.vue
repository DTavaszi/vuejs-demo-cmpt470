<template>
  <v-app id="inspire">
    <v-toolbar color="blue darken-3" dark app clipped-left fixed>
      <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-xs-only"><slot name="title">Demo Chat App</slot></span>
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
        <v-layout row wrap>
          <v-flex xs12 sm6 offset-sm3 mt-5>
            <v-card color="blue darken-3">
              <v-card-text>
                <v-container>
                <div class="landing_title text-xs-center">
                Team Mighty Muffins' VueJS Demo<br/>
                </div>
                <div class="landing_text text-xs-center">
                Welcome, this webapp demonstrates a simple messenger template powered by VueJS and Vuetify.<p>
                  <form v-on:submit.prevent="loginUser()">
                    <v-layout row>
                      <v-flex xs12>
                        <scan>For new user, please click the register button.<br/></scan>
                        <router-link to="/register">
                        <v-btn round color="success">Register</v-btn>
                        </router-link>
                      </v-flex>
                    </v-layout>
                    <br/>
                    <v-layout row>
                      <v-flex xs12>
                        <scan>For existing user, please click the login button.<br/></scan>
                        <router-link to="/login">
                        <v-btn round color="blue darken-1" dark>Login</v-btn>
                        </router-link>
                      </v-flex>
                    </v-layout>
                  </form>
                </div>
                </v-container>
              </v-card-text>
            </v-card>
          </v-flex>

        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>





<script>
import authentication from './Login/authentication'


export default {
  data: function() {
    return {
      loginDetails: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    loginUser: function() {
      authentication.login(this, this.loginDetails)
    }
  }
}
</script>

<style scoped>
</style>
