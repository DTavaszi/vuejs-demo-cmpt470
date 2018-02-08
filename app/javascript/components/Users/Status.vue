<template>
  <div>
    <p v-if="loggedIn">
      Status:

      <input @keyup.enter="updateStatus()" @keyup.esc="reset" type="text" :placeholder="placeholder" v-model="status" />
    </p>

    {{ user.status }}
  </div>
</template>

<script>
import userRequests from './userRequests'
import { mapGetters } from 'vuex'

export default {
  data: function() {
    return {
      status: ''
    }
  },
  computed: {
      ...mapGetters({
        oldStatus: 'currentStatus'
    }),
    user: function() {
      return this.$store.getters.currentUser
    },
    loggedIn: function() {
      return this.$store.getters.isLoggedIn
    },
    placeholder: function() {
      return "What's on your mind, " + this.$store.getters.currentUser.username + "?"
    }
  },
  methods: {
    updateStatus: function() {
      userRequests.updateUser(this, { "status": this.status })
    },
    reset: function() {
      this.status = this.oldStatus
    }
  },
  watch: {
    oldStatus: function(newVal) {
      this.status = newVal
    }
  }
}
</script>
  input {
    width: 300px;
  }
<style scoped>
</style>
