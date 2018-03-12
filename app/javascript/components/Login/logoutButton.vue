<template>
  <button @click="logout()"> Logout </button>
</template>

<script>

import authentication from './authentication'

export default {
  methods: {
    logout: function() {
      authentication.logout(this)
    }
  }
}
</script>

<style scoped>
</style>
