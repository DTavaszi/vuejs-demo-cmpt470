<template>
  <div>
    <header style="background-color: blue; width: 100%; height: 100px;">
      This is my header
    </header>
    <router-link to="/hello">Hello</router-link>
    <router-link to="/login">Login</router-link>
    <Users></Users>
  </div>
</template>

<script>
import Users from './Users'

export default {
  components: {
    Users
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
