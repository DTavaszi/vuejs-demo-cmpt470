<template>
  <div>
    <h1>Login Page</h1>
    <form v-on:submit.prevent="loginUser()">
      <input type="text" placeholder="Username" v-model="loginDetails.username">
      <input type="password" placeholder="Password" v-model="loginDetails.password">
      <button type="submit" value="login"> Login </button>
    </form>
    <router-link to="/">Go back</router-link>
  </div>
</template>

<script>
import loginService from './Login/loginService'

export default {
  data() {
    return {
      loginDetails: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    loginUser: function() {
      const authUser = {}
      var app = this;
      loginService.login(this.loginDetails)
      .then(function(res) {
        if (res.status == 200) { // Not the smoothest implementation
          console.log('logged in')
          authUser.data = res.data
          authUser.token = res.token
          app.$store.state.isLoggedIn = true
          window.localStorage.setItem('lbUser', authUser)

          /* Use for setting data
          if(authUser.data.role_id === 'ADMIN') {
            app.$router.push('/admin')
          }
          else {
            app.$store.state.isLoggedIn = false
            console.log('did not log in')
          }
          */
        } else {
          console.log('not logged in')
        }
      })
      .catch(function(err) {
        console.log(err.data)
      })
    }
  }
}
</script>

<style scoped>
</style>
