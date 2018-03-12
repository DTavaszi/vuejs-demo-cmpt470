<template>
  <v-content>
    <v-container fluid fill-height class="no-padding">
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3 mt-5>
          <v-card color="grey lighten-4">
            <v-card-text>
              <v-container>
                <form v-on:submit.prevent="loginUser()">
                  <v-layout row>
                    <v-flex xs8>
                      <v-text-field label="Email" v-model="loginDetails.email" :rules="emailRules" :error-messages="userValidation" type="email" single-line prepend-icon="email" />
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs8>
                      <v-text-field label="Password" v-model="loginDetails.password" :rules="passwordRules" :error-messages="passwordValidation" type="password" single-line prepend-icon="lock" />
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-btn color="blue darken-1" type="submit" value="login">Login</v-btn>
                      Not yet registered?
                      <router-link to="/register">Register now</router-link>
                    </v-flex>
                  </v-layout>
                </form>
                </br>
                <router-link to="/">Go back</router-link>
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
      },
      loginError: false,
      emailRules: [
        v => !!v || 'Email is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required'
      ],
      userValidation: [],
      passwordValidation: []
    }
  },
  methods: {
    loginUser: function() {
      var app = this
      authentication.login(this, this.loginDetails)
      .then(function(response) {
        app.userValidation = []
        app.passwordValidation = []
        console.log(response)
      })
      .catch(function(error) {
        app.userValidation = ['Invalid login']
        app.passwordValidation = ['']
      })
    }
  }
}
</script>

<style scoped>
</style>
