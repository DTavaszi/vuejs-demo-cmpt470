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
import authentication from './Login/authentication'

export default {
  data: function() {
    return {
      loginDetails: {
        username: '',
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
