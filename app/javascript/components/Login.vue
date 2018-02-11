<!-- <template>
  <div>
    <h1>Login Page</h1>
    <form v-on:submit.prevent="loginUser()">
      <input type="email" placeholder="Email" v-model="loginDetails.email">
      <input type="password" placeholder="Password" v-model="loginDetails.password">
      <button type="submit" value="login"> Login </button>
    </form>
    <router-link to="/">Go back</router-link>
  </div>
</template> -->
<template>
  <div>
    <h1>Temp Login Page</h1>
      <v-container>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-card color="grey lighten-4">
              <v-card-text>
                <v-container>
                  <form v-on:submit.prevent="loginUser()">
                    <v-layout row>
                      <v-flex xs8>
                        <v-text-field 
                          label="Email"
                          v-model="loginDetails.email"
                          type="email"
                          single-line
                          prepend-icon="email"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs8>
                        <v-text-field
                          label="Password"
                          v-model="loginDetails.password"
                          type="password"
                          single-line
                          prepend-icon="lock"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-btn color="blue darken-1" type="submit" value="login">Login</v-btn>
                        <scan>Not registered yet?</scan>
                        <router-link to="/register">register</router-link>
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
  </div>
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
