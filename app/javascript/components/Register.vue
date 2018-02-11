<template>
<div>
  <h1>Registration</h1>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form v-on:submit.prevent="register()">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      label="Email address"
                      v-model="newUser.email"
                      type="email"
                      required>
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      label="Password"
                      v-model="newUser.password"
                      type="password"
                      required>
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      label="Confirm Password"
                      v-model="newUser.password_confirmation"
                      type="password"
                      >
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit" value="register">Register</v-btn>
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
      newUser: {
        email: '',
        username: '',
        password: '',
        password_confirmation: '',
      }
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
