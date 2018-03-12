<template>
  <v-content>
    <v-container fluid fill-height class="no-padding">
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3 mt-5>
          <v-card>
            <v-card-text>
              <v-container>
                <div class="landing_text text-xs-center">
                  <h1> Team Mighty Muffins </h1>
                  </br>
                  <p>
                    Welcome to Vue Messenger! </br>
                    This simple messenger is powered by <strong>VueJS</strong> and styled using <strong>Vuetify</strong>.
                  </p>
                  <p> Please login or register below to start chatting! </p>

                  </br>

                  <v-layout row>
                    <v-flex xs6>
                      Existing users <br/>
                      <router-link to="/login">
                        <v-btn round color="blue darken-1" dark>Login</v-btn>
                      </router-link>
                    </v-flex>
                    <v-flex xs6>
                      New users <br/>
                      <router-link to="/register">
                      <v-btn round color="success">Register</v-btn>
                      </router-link>
                    </v-flex>
                  </v-layout>
                </div>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
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
