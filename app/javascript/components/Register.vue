<template>
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
                        <v-text-field label="Email" v-model="newUser.email" type="email" prepend-icon="email" required />
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field label="Password" v-model="newUser.password" type="password" prepend-icon="lock" required />
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field label="Confirm Password" v-model="newUser.password_confirmation" type="password" prepend-icon="lock" required/>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-btn color="blue darken-1" type="submit" value="register">Register</v-btn>
                        Already have an account?
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
