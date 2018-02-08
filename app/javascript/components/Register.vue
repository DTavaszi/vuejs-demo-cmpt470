<template>
  <div>
    <h1>Registration Page</h1>
    <form v-on:submit.prevent="register()">
      <input type="text" placeholder="Email" v-model="newUser.email">
      <input type="password" placeholder="Password" v-model="newUser.password">
      <input type="password" placeholder="Password Confirmation" v-model="newUser.password_confirmation">
      <button type="submit" value="register"> Register </button>
    </form>
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
